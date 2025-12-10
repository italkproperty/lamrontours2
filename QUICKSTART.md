# Quick Start Guide - Lamron Tours Web App

## ✅ What's Ready

Your complete Lamron Tours & Safaris web application is fully built and running!

### 🌍 Live Server
- **URL**: http://localhost:3001
- **Status**: ✅ Running
- **Built with**: Next.js 16.0.8

### 📄 Pages Available

1. **Home** (http://localhost:3001)
   - Hero banner with CTA buttons
   - Featured 3 tours showcase
   - Company stats and benefits
   - Call-to-action section

2. **Tours** (http://localhost:3001/tours)
   - All 6 tours in a grid layout
   - Sort by rating, price low-to-high, price high-to-low
   - Responsive tour cards with images and ratings

3. **Tour Details** (http://localhost:3001/tours/[slug])
   - Full tour information with images
   - Detailed itinerary with daily breakdown
   - Highlights section
   - Guest reviews
   - Booking CTA with pricing
   - Related tours carousel

4. **Bookings** (http://localhost:3001/bookings)
   - Complete booking form with validation
   - Fields: name, email, phone, tour selection, date, guests, special requests
   - Success confirmation message
   - API integration ready

5. **Contact** (http://localhost:3001/contact)
   - Contact form (name, email, subject, message)
   - Business hours and contact info
   - 4 FAQ items with expandable details
   - API integration ready

6. **About** (http://localhost:3001/about)
   - Company story and mission
   - 4 core values displayed
   - Team member profiles
   - Company statistics
   - Awards and recognition
   - "Why Choose Us" benefits

## 🔌 API Endpoints

### Test the APIs:

```bash
# Get all tours
curl http://localhost:3001/api/tours

# Get all bookings
curl http://localhost:3001/api/bookings

# Get all contact messages  
curl http://localhost:3001/api/contact

# Submit a booking
curl -X POST http://localhost:3001/api/bookings \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+1234567890",
    "tourId": "1",
    "tourName": "Dune Desert Adventure",
    "date": "2024-12-20",
    "guests": "2",
    "specialRequests": "vegetarian meals needed"
  }'

# Submit contact message
curl -X POST http://localhost:3001/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Jane Doe",
    "email": "jane@example.com",
    "subject": "Tour Inquiry",
    "message": "I am interested in your Etosha Safari tour"
  }'
```

## 🛠 Development Commands

```bash
# Start development server (already running)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 📁 File Structure

Everything is organized and ready to customize:

```
/app                 → All pages and API routes
/components          → Reusable React components
/lib                 → Utility functions and types
/data                → Sample JSON data
/public              → Static assets
```

## 🎨 Key Features

✅ **Fully Responsive** - Works on mobile, tablet, desktop
✅ **Tailwind CSS** - Beautiful modern styling
✅ **TypeScript** - Type-safe code
✅ **Next.js App Router** - Latest routing system
✅ **Image Optimization** - Fast-loading images
✅ **SEO Ready** - Metadata on every page
✅ **Loading States** - Spinners during data fetch
✅ **Form Validation** - Required field checks
✅ **Error Handling** - User-friendly error messages

## 📝 Content to Customize

### 1. Update Company Info
Edit `/components/Footer.tsx`:
- Phone number
- Email address
- Physical address
- Social media links

### 2. Update Tour Data
Edit `/data/tours.json`:
- Add/remove tours
- Update prices and descriptions
- Change images and locations

### 3. Customize Colors
Edit `/tailwind.config.js`:
- Change primary color (currently amber/orange)
- Update secondary colors
- Modify any Tailwind values

### 4. Update Text Content
Edit individual page files:
- `/app/(site)/page.tsx` - Home page
- `/app/(site)/about/page.tsx` - About page
- `/app/(site)/contact/page.tsx` - Contact page

### 5. Update Images
Replace Unsplash URLs with your own images:
- Hero images
- Tour images
- Background images

## 🚀 Next Steps

### Immediate (Recommended)

1. **Test the Forms**
   - Fill out booking form
   - Submit contact message
   - Check console for API responses

2. **Customize Content**
   - Update company name/info
   - Change your own tour details
   - Update contact information

3. **Add Your Images**
   - Replace Unsplash URLs with your photos
   - Update hero images
   - Add tour gallery images

### For Production

1. **Set Up Database**
   - Replace in-memory storage with PostgreSQL/MongoDB
   - Store bookings and messages persistently

2. **Add Email Service**
   - SendGrid or Mailgun integration
   - Send confirmation emails

3. **Payment Processing**
   - Stripe or PayPal integration
   - Payment handling for bookings

4. **Deploy to Vercel**
   - Push to GitHub
   - Connect Vercel project
   - One-click deployment

## 💡 Tips

- **Dark Mode**: Tailwind is configured but not enabled - add dark mode toggle if desired
- **Search**: Add tour search functionality in `/app/(site)/tours/page.tsx`
- **Filters**: Expand the sorting to include price range filters
- **Reviews**: Add a reviews database for each tour
- **User Accounts**: Implement authentication for saved bookings

## 📞 Need Help?

All code is well-documented. Common customizations:

```typescript
// Add new tour - edit /data/tours.json
{
  "id": 7,
  "slug": "new-tour-name",
  "name": "Tour Name",
  "location": "Location",
  "price": 999,
  "rating": 4.8,
  "reviews": 45,
  "duration": "2 days",
  "image": "https://...",
  "description": "..."
}

// Update company info - edit /components/Footer.tsx
<a href="tel:+YOUR_NUMBER">

// Change colors - edit /tailwind.config.js
colors: {
  amber: { 600: '#YOUR_COLOR' }
}
```

## ✨ You're All Set!

Your Lamron Tours web application is:
- ✅ Fully functional
- ✅ Ready for customization
- ✅ Optimized for performance
- ✅ Mobile responsive
- ✅ SEO friendly
- ✅ Ready to deploy

**Start customizing, test the features, and deploy when ready!**

---

**Questions?** Check the main README.md for more detailed documentation.
