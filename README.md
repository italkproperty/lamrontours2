# Lamron Tours & Safaris - Namibia Adventure Web Application

A modern, high-end Next.js 13+ application for Lamron Tours & Safaris, featuring dynamic tour listings, booking management, and responsive design.

## 🎯 Features

✅ **Home Page** - Hero section with CTA, featured tours, and company highlights
✅ **Tours Page** - Dynamic listing with sorting and filtering  
✅ **Tour Details** - Full tour information with itinerary, reviews, and pricing
✅ **Booking System** - Complete booking form with API integration
✅ **Contact Page** - Contact form with FAQ section
✅ **About Page** - Company story, team, values, and awards
✅ **API Routes** - Full-featured backend for bookings and contact
✅ **Responsive Design** - Mobile-friendly UI using Tailwind CSS
✅ **SEO Optimized** - Dynamic metadata and structured content
✅ **Performance** - Optimized images, fast loading, and smooth interactions

## 🚀 Tech Stack

- **Framework**: Next.js 16.0.8 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.1.17
- **Icons**: Lucide React
- **Image Optimization**: Next.js Image Component
- **API**: Node.js Routes (in-memory storage)

## 📁 Project Structure

```
app/
├── (site)/                           # Site layout group
│   ├── layout.tsx                   # Site layout with header/footer
│   ├── page.tsx                     # Homepage with hero & featured tours
│   ├── tours/
│   │   ├── page.tsx                 # Tours listing page
│   │   └── [slug]/
│   │       └── page.tsx             # Dynamic tour details page
│   ├── about/
│   │   └── page.tsx                 # Company information
│   ├── contact/
│   │   └── page.tsx                 # Contact form & FAQ
│   └── bookings/
│       └── page.tsx                 # Booking form
├── api/
│   ├── bookings/
│   │   └── route.ts                 # POST/GET bookings endpoint
│   ├── contact/
│   │   └── route.ts                 # POST contact endpoint
│   └── tours/
│       └── route.ts                 # GET tours endpoint
├── layout.tsx                        # Root layout
└── globals.css                       # Global styles

components/
├── Header.tsx                        # Navigation header
├── Footer.tsx                        # Footer
└── TourCard.tsx                      # Tour card component

lib/
├── tours.ts                          # Tour utilities
└── types.ts                          # TypeScript types

data/
└── tours.json                        # Sample tour data
```

## 🛠 Setup & Installation

### Prerequisites
- Node.js 18+ and npm installed

### Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at **http://localhost:3001**

### Build for Production

```bash
npm run build
npm start
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production  
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🌐 Pages & Routes

| Route | Description |
|-------|-------------|
| `/` | Homepage with hero, featured tours, and stats |
| `/tours` | All tours listing with sorting |
| `/tours/[slug]` | Individual tour details with booking CTA |
| `/about` | Company information and team |
| `/contact` | Contact form and FAQ |
| `/bookings` | Booking form for tours |

## 🔌 API Endpoints

### Bookings
- **POST** `/api/bookings` - Submit a new booking
- **GET** `/api/bookings` - Retrieve all bookings

### Contact
- **POST** `/api/contact` - Submit contact form
- **GET** `/api/contact` - Retrieve all contact messages

### Tours
- **GET** `/api/tours` - Retrieve all tours

## 📊 Sample Tours

The application includes 6 sample tours:
1. **Dune Desert Adventure** - $1,299 (3 days)
2. **Etosha Wildlife Safari** - $1,599 (4 days)
3. **Skeleton Coast Expedition** - $1,899 (4 days)
4. **Fish River Canyon Hiking** - $899 (2 days)
5. **Damaraland Cultural Tour** - $799 (2 days)
6. **Swakopmund Adventure** - $649 (2 days)

## 🎨 Design System

**Colors**: Amber/Orange primary, Gray secondary
**Typography**: Bold headings, responsive sizing
**Responsive**: Mobile-first design for all breakpoints

## 🚀 Deploy to Vercel

1. Push code to GitHub
2. Connect to Vercel: https://vercel.com/new
3. Vercel automatically detects Next.js configuration
4. Deploy with one click!

```bash
npm i -g vercel
vercel deploy
```

## 📋 Customization Guide

### Change Company Details
Edit files:
- `components/Footer.tsx` - Phone, email, address
- `app/(site)/contact/page.tsx` - Contact info
- `app/layout.tsx` - Site metadata

### Add/Update Tours
Modify `data/tours.json` or API responses in tour route handlers

### Customize Colors
Edit `tailwind.config.js` colors section

### Update Copy
Edit individual page.tsx files in `app/(site)/`

## 🔒 Production Considerations

Current implementation uses in-memory storage. For production, replace with:
- Database (PostgreSQL, MongoDB, Firebase)
- Email service (SendGrid, Mailgun)
- Payment processing (Stripe, PayPal)
- Image hosting (AWS S3, Cloudinary)
- Authentication system

## 📈 Performance Features

✅ Image optimization with Next.js Image
✅ Tailwind CSS purging for smaller bundles
✅ Automatic code splitting per route
✅ SEO metadata on all pages
✅ Mobile-first responsive design
✅ Fast initial load and navigation

## 📚 Documentation

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript](https://www.typescriptlang.org/docs)

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**

Ready to deploy? Push to GitHub and connect to Vercel!
