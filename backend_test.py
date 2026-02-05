import requests
import sys
from datetime import datetime
import json

class LMGAPITester:
    def __init__(self, base_url="https://talent-global.preview.emergentagent.com"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0
        self.test_results = []

    def run_test(self, name, method, endpoint, expected_status, data=None):
        """Run a single API test"""
        url = f"{self.base_url}/{endpoint}"
        headers = {'Content-Type': 'application/json'}

        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        print(f"URL: {url}")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers, timeout=10)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers, timeout=10)

            success = response.status_code == expected_status
            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                try:
                    response_data = response.json()
                    print(f"Response: {json.dumps(response_data, indent=2)[:200]}...")
                except:
                    print(f"Response: {response.text[:200]}...")
            else:
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                print(f"Response: {response.text[:200]}...")

            self.test_results.append({
                'name': name,
                'method': method,
                'endpoint': endpoint,
                'expected_status': expected_status,
                'actual_status': response.status_code,
                'success': success,
                'response_preview': response.text[:100] if not success else "OK"
            })

            return success, response.json() if success and response.text else {}

        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            self.test_results.append({
                'name': name,
                'method': method,
                'endpoint': endpoint,
                'expected_status': expected_status,
                'actual_status': 'ERROR',
                'success': False,
                'error': str(e)
            })
            return False, {}

    def test_api_root(self):
        """Test API root endpoint"""
        return self.run_test(
            "API Root",
            "GET",
            "api/",
            200
        )

    def test_contact_submission(self):
        """Test contact form submission"""
        test_data = {
            "name": "Test User",
            "email": "test@example.com",
            "phone": "+1234567890",
            "interest": "Talent Management",
            "message": "This is a test message for LMG contact form."
        }
        
        success, response = self.run_test(
            "Contact Form Submission",
            "POST",
            "api/contact",
            200,
            data=test_data
        )
        
        if success and response:
            # Verify response structure
            required_fields = ['id', 'name', 'email', 'interest', 'message', 'created_at']
            for field in required_fields:
                if field not in response:
                    print(f"⚠️  Warning: Missing field '{field}' in response")
                    return False, response
            print("✅ Contact submission response structure is correct")
        
        return success, response

    def test_get_contact_submissions(self):
        """Test getting contact submissions"""
        return self.run_test(
            "Get Contact Submissions",
            "GET",
            "api/contact",
            200
        )

    def test_contact_validation(self):
        """Test contact form validation with invalid data"""
        invalid_data = {
            "name": "",  # Empty name
            "email": "invalid-email",  # Invalid email
            "interest": "",  # Empty interest
            "message": ""  # Empty message
        }
        
        success, response = self.run_test(
            "Contact Form Validation (Invalid Data)",
            "POST",
            "api/contact",
            422,  # Expecting validation error
            data=invalid_data
        )
        
        return success, response

def main():
    print("🚀 Starting LMG API Testing...")
    print("=" * 50)
    
    # Setup
    tester = LMGAPITester()
    
    # Run tests
    print("\n📡 Testing API Connectivity...")
    tester.test_api_root()
    
    print("\n📝 Testing Contact Form Functionality...")
    contact_success, contact_response = tester.test_contact_submission()
    
    print("\n📋 Testing Contact Submissions Retrieval...")
    tester.test_get_contact_submissions()
    
    print("\n🔍 Testing Form Validation...")
    tester.test_contact_validation()
    
    # Print results summary
    print("\n" + "=" * 50)
    print(f"📊 Test Results Summary:")
    print(f"Tests Run: {tester.tests_run}")
    print(f"Tests Passed: {tester.tests_passed}")
    print(f"Success Rate: {(tester.tests_passed/tester.tests_run)*100:.1f}%")
    
    # Print detailed results
    print(f"\n📋 Detailed Results:")
    for result in tester.test_results:
        status = "✅ PASS" if result['success'] else "❌ FAIL"
        print(f"{status} - {result['name']} ({result['method']} {result['endpoint']})")
        if not result['success']:
            if 'error' in result:
                print(f"    Error: {result['error']}")
            else:
                print(f"    Expected: {result['expected_status']}, Got: {result['actual_status']}")
    
    return 0 if tester.tests_passed == tester.tests_run else 1

if __name__ == "__main__":
    sys.exit(main())