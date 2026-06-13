# LeCroy & Owens Handyman & Remodeling Co. — Website

Professional, fast, local-SEO-optimized website for a Spartanburg, SC handyman, deck builder, siding, remodeling, and home services company.

## Current Status (MVP — Launch Ready Shell)
- Built with Next.js 16 + TypeScript + Tailwind
- Strong on-page + technical local SEO (HomeAndConstructionBusiness schema, keyword-rich titles/headings, service area content, real project photos with good alt text)
- Homepage hero, services grid, areas served, real work gallery, testimonials, prominent click-to-call + quote form
- Dedicated pages: /services, /gallery, /about
- 10 real work photos integrated (decks, siding, exteriors)
- Fully static (excellent Core Web Vitals & cheap/fast hosting)

## Quick Start (Preview Locally)
```bash
cd le-croy-handyman-remodeling
npm install
npm run dev
```
Open http://localhost:3000

## Key Business Details (from constants.ts)
- **Name**: LeCroy & Owens Handyman & Remodeling Co.
- **Phone**: (864)606-4438 (click-to-call everywhere)
- **Primary Area**: Spartanburg County + Upstate SC (50-100 miles)
- **Services**: Decks & Porches, Siding, Bathroom Remodeling, Flooring, Home Remodeling, Electrical, Sheds, General Handyman
- **Experience**: 10+ years of experience (crew with wide variety of skills) — hundreds of decks built, full home remodels from kitchens to additions

**TODOs before launch** (easy to edit):
1. **Contact Form (Formspree)**: Done! 
   - Endpoint is set to https://formspree.io/f/xojznlga
   - The form (in components/ContactForm.tsx) submits via fetch (AJAX), shows loading/success states, has honeypot spam protection, and doesn't reload the page. Submissions go straight to your email.
2. Update email in `lib/constants.ts` (currently contact@lecroy-owens.com)
3. Update exact years experience + any highlights in `lib/constants.ts` (currently "10+ years of experience (crew with wide variety of skills)" — hundreds of decks built, full home remodels from kitchens to additions)
4. Replace placeholder testimonials with real ones in `lib/constants.ts` (currently using good placeholders; swap note removed)
5. Choose and assign your real domain (see Deployment section below)
6. (Optional) Add real street address + lat/long in constants for richer schema

## Deployment & Making It a Real Website

### 1. Deploy to Vercel (Recommended - Free & Perfect for Next.js)
Vercel is the best host for this project (automatic deploys, great performance, free custom domains, previews).

**Option A: Via Vercel Dashboard (easiest)**
1. Create a new private or public repo on GitHub named `lecroy-owens-handyman`.
2. Run these commands:
   ```bash
   git remote add origin https://github.com/YOUR_GITHUB_USERNAME/lecroy-owens-handyman.git
   git branch -M main
   git push -u origin main
   ```
3. Go to https://vercel.com and log in with GitHub.
4. Click **"Add New Project"** → Import the `lecroy-owens-handyman` repository.
5. Vercel will automatically detect it's a Next.js project. Click **Deploy**.

**Option B: Using Vercel CLI**
```bash
npm i -g vercel
vercel
# Follow the prompts (it will deploy and give you a URL)
```

### 2. Assign / Buy a Domain
Good domain suggestions for "LeCroy & Owens Handyman & Remodeling Co." (Spartanburg, SC):
- `lecroy-owens.com` (your new domain - perfect!)
- `lecroyhandyman.com` (short & memorable)
- `spartanburghandyman.com` (strong for local SEO)
- `upstatehandyman.com`

**Where to buy:**
- Namecheap.com (often cheapest + easy)
- Porkbun.com (great support, privacy included)
- Cloudflare Registrar (very cheap, excellent privacy)

1. Search and buy your chosen domain (usually $8–15 for the first year).
2. In Vercel Dashboard:
   - Go to your project → **Settings** → **Domains**
   - Add your domain (e.g. `lecroy-owens.com`)
   - Follow Vercel's instructions to update DNS at your registrar (they'll show exact records — usually a CNAME for `www` and A records for the root, or change nameservers).

3. Once DNS propagates (can take a few minutes to hours), your site will be live at the real domain.

### 3. Custom Domain on Vercel
Once the project is deployed on Vercel:
1. Go to your project on Vercel → **Settings** → **Domains**.
2. Add `lecroy-owens.com` (and optionally `www.lecroy-owens.com`).
3. Vercel will show you the exact DNS records to add at your domain registrar (Namecheap, Porkbun, etc.).
4. Add those records at your registrar.
5. Wait a few minutes (sometimes up to an hour) for DNS to propagate. Vercel will automatically provision SSL.

### 4. Post-Launch Essentials
- **Google Search Console**: Add your domain and submit sitemap (`https://lecroy-owens.com/sitemap.xml`)
- **Google Business Profile**: Claim/update it and add your new website + photos from the gallery.
- **Formspree**: Already set up (endpoint: https://formspree.io/f/xdavldjp). The form has nice AJAX submit + success state.
- **Analytics**: Vercel Analytics is already free and on by default. Add GA4 if you want.

### 5. WWW Redirect
I've added a `vercel.json` that automatically redirects `www.lecroy-owens.com` → `lecroy-owens.com` (non-www is primary, which is modern and fine for SEO).

When adding your domain in Vercel:
- Add both `lecroy-owens.com` and `www.lecroy-owens.com`
- Vercel will verify the DNS. The redirect is handled automatically by the config.

The site is fully production-ready. Let's get a domain chosen and deployed! 

Which domain do you like best from the suggestions above (or do you have your own in mind)? I'll update the code and give precise next commands.

## Deploy (Recommended: Vercel — 1 minute)
1. Push this folder to GitHub (or use Vercel CLI / Git import)
2. Import to Vercel → it auto-detects Next.js
3. Add your custom domain in Vercel settings
4. Update `siteUrl` in `app/layout.tsx` and the `url` inside `lib/schema.ts`

After deploy:
- Submit sitemap (https://yourdomain.com/sitemap.xml) in Google Search Console
- Claim/optimize your Google Business Profile (add the website, photos from the gallery, services list, posts)
- Request reviews from past customers and ask them to mention the work (deck, siding, etc.)

## Logo Assets
- `public/images/logo.png` — Current main brand mark (the full detailed circular logo with house icon, taglines, etc.)
- `public/images/logo-simple.png` — The simpler earlier logo version (kept so you can still use it as an icon-only or secondary mark)
- `public/images/logo-new.png` — Raw version of the latest logo you provided
- `public/images/logo-v2.png` — Another copy of the current main

If you want a more compact icon-only version of the new logo for the navbar or favicon in the future, let me know and we can extract just the "LG + house" mark.

## Updating Content Later
- Services, locations, business info → edit `lib/constants.ts`
- Add more photos → drop in `public/images/work/` and update the arrays in `app/page.tsx` or `app/gallery/page.tsx`
- New testimonials → replace in `lib/constants.ts`
- Logo swap → just replace `logo.png` (or ask me to do it)

## SEO Notes
The site is built to rank for "handyman near me", "deck builder Spartanburg", "siding repair near me", "carpenter Spartanburg SC", "bathroom remodel Spartanburg", etc.
Real results come from:
- Consistent NAP everywhere (Name, Address, Phone)
- Strong Google Business Profile + reviews
- Citations on local directories
- Time + more content (we can add a blog later for long-tail keywords)

## Need Help?
This was built step-by-step with you. Just send:
- Email address
- Exact years + highlights
- Logo file
- Real testimonials or stories
- Any specific changes

We'll lock it in, deploy, and get the post-launch checklist done.
