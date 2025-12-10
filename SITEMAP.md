# Lamron Tours Website Sitemap

## 📍 Complete Site Navigation Map

```
LAMRON TOURS & SAFARIS
└── HOME (/)
    ├── Hero Section
    │   ├── Main Headline
    │   ├── Subheading
    │   └── CTA Buttons
    │       ├── "Explore Tours" → /tours
    │       └── "Get In Touch" → /contact
    │
    ├── Featured Tours Section
    │   ├── Featured Tour 1 → /tours/dune-desert-adventure
    │   ├── Featured Tour 2 → /tours/etosha-wildlife-safari
    │   ├── Featured Tour 3 → /tours/skeleton-coast-expedition
    │   └── "View All Tours" Button → /tours
    │
    ├── Statistics Section
    │   ├── 1000+ Happy Travelers
    │   ├── 25+ Unique Tours
    │   └── 15+ Years Experience
    │
    ├── Why Choose Us Section
    │   ├── Expert Guides
    │   ├── Luxury Camping
    │   ├── Small Groups
    │   └── Sustainable Tourism
    │
    └── Final CTA
        └── "Book Your Tour Now" → /bookings

TOURS (/tours)
├── Page Header
├── Sorting Controls
│   ├── Sort by Highest Rated
│   ├── Sort by Price (Low to High)
│   └── Sort by Price (High to Low)
│
├── Tours Grid (6 Tours)
│   ├── Tour Card 1: Dune Desert Adventure ($1,299)
│   │   └── Click → /tours/dune-desert-adventure
│   │
│   ├── Tour Card 2: Etosha Wildlife Safari ($1,599)
│   │   └── Click → /tours/etosha-wildlife-safari
│   │
│   ├── Tour Card 3: Skeleton Coast Expedition ($1,899)
│   │   └── Click → /tours/skeleton-coast-expedition
│   │
│   ├── Tour Card 4: Fish River Canyon Hiking ($899)
│   │   └── Click → /tours/fish-river-canyon-hike
│   │
│   ├── Tour Card 5: Damaraland Cultural Tour ($799)
│   │   └── Click → /tours/damaraland-cultural-tour
│   │
│   └── Tour Card 6: Swakopmund Adventure ($649)
│       └── Click → /tours/swakopmund-adventure
│
└── Each tour card contains:
    ├── Image
    ├── Price
    ├── Name
    ├── Location
    ├── Duration
    ├── Description
    └── Rating & Reviews

TOUR DETAILS (/tours/[slug])
├── Hero Image
├── Tour Title
├── Quick Info
│   ├── 📍 Location
│   ├── ⏱️ Duration
│   └── ⭐ Rating
│
├── Main Content (Left Column)
│   ├── Full Description
│   │
│   ├── Highlights Section
│   │   ├── Highlight 1
│   │   ├── Highlight 2
│   │   ├── Highlight 3
│   │   └── Highlight 4
│   │
│   ├── Itinerary Section
│   │   ├── Day 1: [Activity]
│   │   ├── Day 2: [Activity]
│   │   ├── Day 3: [Activity]
│   │   └── Day 4: [Activity] (if applicable)
│   │
│   └── Reviews Section
│       ├── Review 1 (5 stars)
│       ├── Review 2 (5 stars)
│       └── Review 3 (5 stars)
│
├── Booking Sidebar (Right Column)
│   ├── Price Display
│   ├── "Book This Tour" Button → /bookings?tour=[id]
│   ├── "Request More Info" Button
│   ├── What's Included Checklist
│   │   ├── ✓ Accommodation
│   │   ├── ✓ All meals
│   │   ├── ✓ Expert guide
│   │   ├── ✓ Transportation
│   │   ├── ✓ Park entrance fees
│   │   └── ✓ Equipment
│   │
│   └── Help Section
│       └── Contact Us Link → /contact
│
└── Related Tours Section
    ├── Other Tour 1
    ├── Other Tour 2
    └── Other Tour 3

BOOKINGS (/bookings)
├── Page Header
├── Booking Form (if not submitted)
│   ├── Form Section
│   │   ├── Full Name (required)
│   │   ├── Email Address (required)
│   │   ├── Phone Number (required)
│   │   ├── Select Tour (required)
│   │   ├── Travel Date (required)
│   │   ├── Number of Guests (required)
│   │   └── Special Requests (optional)
│   │
│   └── Submit Button
│       └── POST → /api/bookings
│
├── Success Message (if submitted)
│   ├── Confirmation Icon
│   ├── "Booking Submitted!" Message
│   ├── "Make Another Booking" Button
│   └── "Browse More Tours" Link → /tours
│
└── Additional Info Cards
    ├── Flexible Dates Card
    ├── Transparent Pricing Card
    └── Need Help Card
        └── Contact Link → /contact

CONTACT (/contact)
├── Page Header
├── Two-Column Layout
│
├── Left Column: Contact Information
│   ├── Contact Info Section
│   │   ├── Phone: +264 61 123 4567
│   │   ├── Email: info@lamrontours.com
│   │   └── Address: Windhoek, Namibia
│   │
│   └── Business Hours Card
│       ├── Mon-Fri: 08:00 - 18:00
│       ├── Sat: 09:00 - 14:00
│       └── Sun: Closed
│
├── Right Column: Contact Form
│   ├── Full Name (required)
│   ├── Email Address (required)
│   ├── Subject (required)
│   ├── Message (required)
│   └── Send Button
│       └── POST → /api/contact
│
└── FAQ Section
    ├── How do I book a tour?
    ├── What is your cancellation policy?
    ├── Are your tours suitable for families?
    └── What is included in the tour price?

ABOUT (/about)
├── Page Header
│
├── Our Story Section
│   ├── Heading
│   ├── Story Text (2-3 paragraphs)
│   ├── "Explore Our Tours" Button → /tours
│   └── Image
│
├── Core Values Section (4 Cards)
│   ├── 🌍 Sustainability
│   ├── ✨ Quality
│   ├── 🤝 Integrity
│   └── 💡 Innovation
│
├── Team Section (4 Team Members)
│   ├── David Kamba - Founder & CEO
│   ├── Sarah Moyo - Head Guide
│   ├── James Okereke - Operations Manager
│   └── Amara Dlamini - Cultural Liaison
│
├── Statistics Section
│   ├── 1000+ Happy Travelers
│   ├── 25+ Unique Tours
│   ├── 15+ Years Experience
│   └── 4.8★ Average Rating
│
├── Awards & Recognition (3 Cards)
│   ├── 🏆 Best Safari Operator 2023
│   ├── 🏆 Sustainable Tourism Award
│   └── 🏆 Top Rated on TripAdvisor
│
├── Why Choose Us Section (6 Cards)
│   ├── Expert Local Guides
│   ├── Personalized Experiences
│   ├── Sustainable Practices
│   ├── 24/7 Support
│   ├── Competitive Pricing
│   └── Proven Track Record
│
└── Final CTA Section
    └── "Explore Tours Now" Button → /tours
```

---

## 🎯 Navigation Elements Present on Every Page

### Header (Top Navigation)
```
[LOGO] Lamron Tours Safaris & Adventures
├── Tours Link → /tours
├── About Link → /about
├── Contact Link → /contact
└── "Book Now" Button → /bookings
```

### Footer (Bottom Navigation)
```
Footer Section
├── Column 1: Company Info
├── Column 2: Quick Links
│   ├── Tours → /tours
│   ├── About → /about
│   └── Contact → /contact
├── Column 3: Contact Details
│   ├── Phone
│   ├── Email
│   └── Address
├── Column 4: Social Links
│   ├── Facebook
│   ├── Instagram
│   └── Twitter
└── Copyright Notice
```

---

## 📱 Page Structure Overview

### Home Page
- 5 main sections
- 6 CTAs/Buttons
- Multiple navigation paths

### Tours Page
- 1 main section (grid)
- 6 tour cards
- Sorting controls
- Direct links to each tour

### Tour Details
- 3 main content areas
- Booking sidebar
- Related tours
- Multiple CTAs

### Booking Page
- 1 form (multi-field)
- 1 success state
- 3 info cards

### Contact Page
- Contact info sidebar
- Contact form
- 4 FAQ items

### About Page
- 5 main sections
- 4 team cards
- 3 award cards
- 6 benefit cards

---

## 🔗 Link Summary

**Total Pages**: 6
**Total Internal Links**: 30+
**Total CTAs**: 25+
**Total Forms**: 2 (Booking, Contact)
**Total API Calls**: 2 (Form submissions)

---

## 📊 Content Hierarchy

```
Home (Entry Point)
├── Drives to Tours
├── Drives to Bookings
└── Drives to Contact

Tours (Discovery)
├── Links to individual tours
└── Links back to Home

Tour Details (Decision)
├── Links to Booking
├── Links to other tours
└── Links to Contact

Booking (Conversion)
├── Form submission
└── Success/error handling

About (Information)
└── Links to Tours

Contact (Support)
└── Form submission
```

---

This sitemap represents the complete user journey through your Lamron Tours website. All links are functional and integrated with your API endpoints.
