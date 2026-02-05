from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone
import asyncio
import resend

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Resend configuration
resend.api_key = os.environ.get('RESEND_API_KEY', '')
SENDER_EMAIL = os.environ.get('SENDER_EMAIL', 'onboarding@resend.dev')
NOTIFICATION_EMAIL = os.environ.get('NOTIFICATION_EMAIL', 'info@wearelemieux.com')

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

class ContactSubmission(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    phone: Optional[str] = None
    interest: str
    message: str
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class ContactSubmissionCreate(BaseModel):
    name: str
    email: EmailStr
    phone: Optional[str] = None
    interest: str
    message: str

# Routes
@api_router.get("/")
async def root():
    return {"message": "LMG API is running"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks

@api_router.post("/contact", response_model=ContactSubmission)
async def submit_contact(input: ContactSubmissionCreate):
    """Submit a contact form - stores in DB and sends email notification"""
    contact_dict = input.model_dump()
    contact_obj = ContactSubmission(**contact_dict)
    
    # Prepare document for MongoDB
    doc = contact_obj.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    
    # Store in MongoDB
    await db.contact_submissions.insert_one(doc)
    logger.info(f"Contact submission stored: {contact_obj.id}")
    
    # Send email notification (non-blocking)
    if resend.api_key:
        try:
            html_content = f"""
            <html>
            <body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
                <div style="background-color: #f4cd2a; padding: 20px; text-align: center;">
                    <h1 style="color: #000000; margin: 0;">New Contact Submission</h1>
                </div>
                <div style="padding: 20px; background-color: #f5f5f5;">
                    <h2 style="color: #000000;">Contact Details</h2>
                    <table style="width: 100%; border-collapse: collapse;">
                        <tr>
                            <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Name:</strong></td>
                            <td style="padding: 10px; border-bottom: 1px solid #ddd;">{contact_obj.name}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Email:</strong></td>
                            <td style="padding: 10px; border-bottom: 1px solid #ddd;">{contact_obj.email}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Phone:</strong></td>
                            <td style="padding: 10px; border-bottom: 1px solid #ddd;">{contact_obj.phone or 'Not provided'}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Interest:</strong></td>
                            <td style="padding: 10px; border-bottom: 1px solid #ddd;">{contact_obj.interest}</td>
                        </tr>
                    </table>
                    <h3 style="color: #000000; margin-top: 20px;">Message:</h3>
                    <p style="background-color: #ffffff; padding: 15px; border-left: 4px solid #f4cd2a;">
                        {contact_obj.message}
                    </p>
                </div>
                <div style="background-color: #000000; color: #ffffff; padding: 15px; text-align: center; font-size: 12px;">
                    <p>Lemieux Management Group</p>
                    <p>Talent. Media. Global Representation.</p>
                </div>
            </body>
            </html>
            """
            
            params = {
                "from": SENDER_EMAIL,
                "to": [NOTIFICATION_EMAIL],
                "subject": f"New LMG Contact: {contact_obj.interest} - {contact_obj.name}",
                "html": html_content
            }
            
            # Run in thread to keep async
            email_result = await asyncio.to_thread(resend.Emails.send, params)
            logger.info(f"Email notification sent: {email_result.get('id', 'unknown')}")
        except Exception as e:
            logger.error(f"Failed to send email notification: {str(e)}")
            # Don't raise - email failure shouldn't fail the submission
    
    return contact_obj

@api_router.get("/contact", response_model=List[ContactSubmission])
async def get_contact_submissions():
    """Get all contact submissions"""
    submissions = await db.contact_submissions.find({}, {"_id": 0}).to_list(1000)
    
    for submission in submissions:
        if isinstance(submission['created_at'], str):
            submission['created_at'] = datetime.fromisoformat(submission['created_at'])
    
    return submissions

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
