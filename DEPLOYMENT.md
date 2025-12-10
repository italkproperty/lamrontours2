# Deployment Guide - Lamron Tours

## 🚀 Deploy to Vercel (Recommended)

Vercel is the official Next.js hosting platform. Deployment is one-click and free!

### Step 1: Push Code to GitHub

```bash
# Initialize git if not already done
git init
git add .
git commit -m "Initial commit: Lamron Tours web app"

# Create a new repository on GitHub
# Then push your code:
git remote add origin https://github.com/YOUR_USERNAME/lamrontours2.git
git branch -M main
git push -u origin main
```

### Step 2: Connect to Vercel

1. Go to https://vercel.com/new
2. Click "Import Git Repository"
3. Select your GitHub repository
4. Vercel automatically detects Next.js configuration
5. Click "Deploy" - that's it!

### Step 3: Custom Domain

1. In Vercel dashboard, go to Settings → Domains
2. Add your custom domain (e.g., lamrontours.com)
3. Follow DNS instructions from your domain provider
4. DNS will propagate within 24-48 hours

### Step 4: Environment Variables

If you add environment variables later:

1. In Vercel dashboard, go to Settings → Environment Variables
2. Add variables and their values
3. Redeploy to apply changes

```bash
# Trigger redeployment
git commit --allow-empty -m "Trigger Vercel rebuild"
git push
```

## 📦 Other Deployment Options

### Deploy to Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build the project
npm run build

# Deploy
netlify deploy --prod
```

### Deploy to AWS Amplify

```bash
# Install Amplify CLI
npm install -g @aws-amplify/cli

# Initialize Amplify
amplify init

# Deploy
amplify publish
```

### Deploy to DigitalOcean App Platform

1. Create DigitalOcean account
2. Connect GitHub repository
3. Configure build and runtime settings
4. Deploy

## 🛠 Production Checklist

Before deploying, ensure:

- [ ] Replace all Unsplash image URLs with your own images
- [ ] Update company name, phone, email, address
- [ ] Update tour information with real data
- [ ] Test all forms (booking, contact)
- [ ] Test all links and navigation
- [ ] Update SEO metadata in `layout.tsx`
- [ ] Replace placeholder text throughout
- [ ] Test on mobile and desktop
- [ ] Add favicon (place `favicon.ico` in `/public`)

## 🔒 Production Database Setup

Current implementation uses in-memory storage (lost on restart). For production:

### Option 1: PostgreSQL (Recommended)

```bash
npm install prisma @prisma/client
npx prisma init
```

Edit `.env.local`:
```
DATABASE_URL="postgresql://user:password@localhost:5432/lamrontours"
```

### Option 2: MongoDB

```bash
npm install mongodb mongoose
```

Edit `.env.local`:
```
MONGODB_URI="mongodb+srv://user:password@cluster.mongodb.net/lamrontours"
```

### Option 3: Firebase

```bash
npm install firebase
```

Edit `.env.local`:
```
NEXT_PUBLIC_FIREBASE_API_KEY="..."
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN="..."
```

## 📧 Email Integration

### SendGrid Setup

```bash
npm install @sendgrid/mail
```

Edit `.env.local`:
```
SENDGRID_API_KEY="SG.xxxxx"
```

Update `/app/api/contact/route.ts`:
```typescript
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

// In your POST handler:
await sgMail.send({
  to: 'your-email@lamrontours.com',
  from: 'noreply@lamrontours.com',
  subject: `New Contact: ${body.subject}`,
  text: body.message,
});
```

## 💳 Payment Processing

### Stripe Integration

```bash
npm install stripe @stripe/react-stripe-js @stripe/stripe-js
```

Edit `.env.local`:
```
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_..."
STRIPE_SECRET_KEY="sk_..."
```

Create `/app/api/create-payment-intent/route.ts`:
```typescript
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(request: NextRequest) {
  const { amount } = await request.json();

  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount * 100,
    currency: 'usd',
  });

  return NextResponse.json({ clientSecret: paymentIntent.client_secret });
}
```

## 🔍 SEO & Analytics

### Add Google Analytics

Edit `/app/layout.tsx`:
```tsx
import Script from 'next/script';

export default function RootLayout() {
  return (
    <html>
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-YOUR_ID`}
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-YOUR_ID');
            `,
          }}
        />
      </head>
      {/* ... */}
    </html>
  );
}
```

### Add Sitemap

Create `/public/sitemap.xml`:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://lamrontours.com/</loc>
    <lastmod>2024-01-01</lastmod>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://lamrontours.com/tours</loc>
    <lastmod>2024-01-01</lastmod>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://lamrontours.com/about</loc>
    <lastmod>2024-01-01</lastmod>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://lamrontours.com/contact</loc>
    <lastmod>2024-01-01</lastmod>
    <priority>0.8</priority>
  </url>
</urlset>
```

## 🚨 Common Deployment Issues

### Issue: Port already in use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
npm run dev
```

### Issue: Build fails
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Issue: Images not loading
- Ensure image URLs are HTTPS
- Add image domains to `next.config.js`:

```js
module.exports = {
  images: {
    domains: ['images.unsplash.com', 'your-domain.com'],
  },
};
```

### Issue: Vercel deployment hangs
```bash
# Increase timeout
# In vercel.json:
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "env": {
    "NODE_OPTIONS": "--max_old_space_size=3000"
  }
}
```

## 📊 Monitoring

### Use Vercel Analytics (Free)

In Vercel dashboard:
1. Settings → Analytics
2. Enable Web Vitals
3. Monitor performance

### Add Error Tracking

```bash
npm install @sentry/nextjs
npx @sentry/wizard@latest -i nextjs
```

## 🔄 Continuous Deployment

Every time you push to GitHub, Vercel automatically:
1. Detects changes
2. Builds new version
3. Runs tests
4. Deploys to production

Perfect for agile development!

## 📝 Deployment Summary

**Fastest Deployment**:
1. Push to GitHub
2. Connect to Vercel
3. Done! 🎉

**Time Required**: 5 minutes
**Cost**: Free (with Vercel Hobby plan)
**Scalability**: Auto-scales with traffic

---

**Your Lamron Tours web app is deployment-ready!**

Choose Vercel for one-click deployment, or follow platform-specific guides above.

Questions? Check the main README.md or see Vercel docs: https://vercel.com/docs
