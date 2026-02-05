# Lemieux Management Group (LMG) Website - PRD

## Project Overview
A modern, professional talent management website for Lemieux Management Group (LMG) - a 360° talent management and media company focused on African talents for global opportunities.

## Original Problem Statement
Create a sophisticated talent management website inspired by UTA (United Talent Agency) with:
- Clean, minimal aesthetic with bold typography
- Brand colors: Yellow (#f4cd2a), Black (#000000), White
- Full content sections covering services, sports management, and company info
- Contact form with database storage and email notifications

## User Personas
1. **African Creatives & Artists** - Seeking professional representation and global exposure
2. **Professional Athletes** - Looking for sports management and career guidance
3. **Brands & Corporations** - Seeking talent partnerships and influencer collaborations
4. **Public Figures** - Needing media visibility and brand positioning

## Core Requirements (Static)
- Single-page responsive website
- Sticky navigation with smooth scrolling
- Hero section with company tagline
- About, Vision/Mission, Services, Sports Management, Why LMG sections
- Contact form with validation
- Footer with social links
- Yellow/Black brand color scheme
- Mobile-first responsive design

## What's Been Implemented (February 2026)

### Frontend
- **Navbar.js** - Sticky navigation with mobile hamburger menu
- **Hero.js** - Full-screen hero with animated headline and CTA
- **About.js** - Company introduction with image
- **VisionMission.js** - Side-by-side cards for vision/mission
- **Services.js** - 3-column grid with service cards (hover effects)
- **Sports.js** - LSM sports management division showcase
- **WhyLMG.js** - 5 feature blocks highlighting differentiators
- **Approach.js** - Company approach statement with stats
- **Contact.js** - Form with validation and submission
- **Footer.js** - Social links, quick links, watermark

### Backend
- **Contact API** - POST /api/contact (store submissions)
- **Contact Retrieval** - GET /api/contact (list submissions)
- **Email Integration** - Resend ready (requires API key)

### Technical Stack
- Frontend: React, Tailwind CSS, Framer Motion
- Backend: FastAPI, MongoDB
- Email: Resend (optional)

## Prioritized Backlog

### P0 (Critical) - DONE
- [x] All website sections implemented
- [x] Contact form with database storage
- [x] Mobile responsive design
- [x] Navigation functionality

### P1 (Important) - Future
- [ ] Add Resend API key for email notifications
- [ ] Admin dashboard to view contact submissions
- [ ] Add real social media links

### P2 (Nice to Have) - Future
- [ ] Client testimonials section
- [ ] Blog/News section
- [ ] Talent portfolio gallery
- [ ] Multi-language support

## Next Tasks
1. Provide Resend API key to enable email notifications
2. Update social media links with actual URLs
3. Consider adding client testimonials or case studies
