# Lemieux Management Group (LMG) Website - PRD

## Project Overview
A modern, professional multi-page website for Lemieux Management Group (LMG) - a premier global management and multimedia corporate group specializing in sports, entertainment, media, and creative production.

## Original Problem Statement
Create a sophisticated, professional, multi-page website for LMG inspired by UTA (United Talent Agency) with:
- Clean, minimal aesthetic with bold typography
- Brand colors: Yellow (#f4cd2a), Black (#000000), White
- 7 main pages + 4 division pages
- Multi-page React Router structure with navigation dropdown
- Contact form with database storage and email notifications

## User Personas
1. **African Creatives & Artists** - Seeking professional representation and global exposure
2. **Professional Athletes** - Looking for sports management and career guidance  
3. **Brands & Corporations** - Seeking talent partnerships and influencer collaborations
4. **Government Entities & Investors** - Exploring strategic partnerships
5. **Media Outlets** - Interested in content partnerships

## Core Requirements (Static)
- Multi-page responsive website with React Router
- 7 main pages: Home, About, Services, Why LMG, Partners, Contact
- 4 division pages: Sports, Entertainment, Media, Studios
- Navigation with dropdown for Divisions
- Contact form with validation and database storage
- Email notifications via Resend
- Yellow/Black brand color scheme
- Mobile-first responsive design

## What's Been Implemented (February 2026)

### Pages Created
1. **HomePage.js** - Hero, intro, what we do, divisions overview, why LMG preview, stats, CTA
2. **AboutPage.js** - Hero, vision/mission cards, approach, global presence
3. **ServicesPage.js** - 3 service sections (Talent Management, Media & Content, Brand Partnerships)
4. **WhyLMGPage.js** - 5 key differentiators with images
5. **PartnersPage.js** - Partnership benefits, investment opportunities
6. **ContactPage.js** - Enhanced form with type selection, interests checkboxes
7. **SportsPage.js** - LMG Sports division
8. **EntertainmentPage.js** - LMG Entertainment division
9. **MediaPage.js** - LMG Media division
10. **StudiosPage.js** - LMG Studios division

### Components
- **Navbar.js** - Multi-page navigation with dropdown for Divisions
- **Footer.js** - Quick links, divisions, contact info, social links
- **ScrollToTop.js** - Scroll to top on route change

### Backend
- **Contact API** - POST /api/contact (store submissions)
- **Contact Retrieval** - GET /api/contact (list submissions)
- **Email Integration** - Resend ready (requires API key)

### Technical Stack
- Frontend: React, React Router, Tailwind CSS, Framer Motion
- Backend: FastAPI, MongoDB
- Email: Resend (optional)

### Test Results
- Backend: 100% (4/4 endpoints working)
- Frontend: 85% (core features working)

## Prioritized Backlog

### P0 (Critical) - DONE
- [x] All 10 website pages implemented
- [x] Multi-page navigation with dropdown
- [x] Contact form with database storage
- [x] Mobile responsive design
- [x] Footer with all links

### P1 (Important) - Future
- [ ] Add Resend API key for email notifications
- [ ] Admin dashboard to view contact submissions
- [ ] Add real social media links

### P2 (Nice to Have) - Future
- [ ] Client testimonials/case studies
- [ ] Blog/News section
- [ ] Talent portfolio gallery
- [ ] Multi-language support
- [ ] Video backgrounds for hero sections

## Contact Information
- Email: info@wearelemieux.com
- Website: www.wearelemieux.com
- Phone: +234 703 472 0462, +1 262 709 8704
- Offices: Africa, United Kingdom, Canada, United States

## Next Tasks
1. Add Resend API key to enable email notifications
2. Update social media links with actual URLs
3. Consider adding client testimonials or case studies
