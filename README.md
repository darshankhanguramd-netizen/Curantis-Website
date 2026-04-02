# Curantis Specialty Care — curantiscare.ca

Virtual multi-specialty clinic website for Dr. Darshan Singh Khangura.  
**Internal Medicine | Endocrinology & Metabolism | Respirology | Weight Management | Lifestyle Medicine**

Ontario, Canada — OHIP patients — Virtual care delivery

---

## Quick Start

```bash
# Clone and install
git clone <repo-url> curantis-care
cd curantis-care
npm install

# Run dev server
npm run dev
# → http://localhost:3000

# Build for production
npm run build

# Deploy to Vercel
npx vercel
```

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS 3.4 |
| Content | MDX (blog posts in `content/blog/`) |
| Icons | Lucide React |
| Fonts | DM Serif Display + DM Sans (Google Fonts) |
| Deployment | Vercel |
| Language | TypeScript |

## Project Structure

```
curantis-care/
├── public/
│   ├── images/              # Site images (add hero, team photos, etc.)
│   └── documents/           # Downloadable PDFs (referral form)
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout (SEO, structured data, header/footer)
│   │   ├── page.tsx         # Homepage
│   │   ├── about/
│   │   ├── services/
│   │   │   ├── diabetes/
│   │   │   ├── respirology/
│   │   │   ├── weight-management/
│   │   │   └── lifestyle-medicine/
│   │   ├── how-it-works/
│   │   ├── for-patients/
│   │   ├── for-providers/
│   │   ├── team/
│   │   ├── blog/
│   │   │   ├── page.tsx     # Blog index
│   │   │   └── [slug]/      # Dynamic blog post pages
│   │   ├── contact/
│   │   ├── refer/           # Online referral form
│   │   ├── fees/            # Fee schedule (OHIP + private)
│   │   ├── privacy/         # PHIPA-compliant privacy policy
│   │   └── terms/           # Terms of service
│   ├── components/
│   │   └── layout/
│   │       ├── Header.tsx
│   │       └── Footer.tsx
│   ├── lib/
│   │   └── mdx.ts           # MDX blog post utilities
│   └── styles/
│       └── globals.css       # Tailwind + design system tokens
├── content/
│   └── blog/                 # MDX blog posts
│       └── understanding-a1c.mdx
├── tailwind.config.ts        # Custom color palette + design system
├── next.config.mjs
├── tsconfig.json
└── package.json
```

## Design System

### Colors

| Token | Hex | Use |
|-------|-----|-----|
| `brand-600` | `#1f7d5a` | Primary green — buttons, links, accents |
| `navy-900` | `#1e2a40` | Headings, body text |
| `navy-50` | `#f2f5f9` | Light backgrounds |
| `warm-500` | `#d98c5e` | Warm accent (private services) |
| `sage-500` | `#768568` | Tertiary / nature tone |

### Typography

- **Display:** DM Serif Display (headings)
- **Body:** DM Sans (everything else)
- Imported via Google Fonts CDN

### Component Classes

- `.btn-primary` / `.btn-secondary` / `.btn-outline` — Button styles
- `.card` / `.card-elevated` — Card containers
- `.container-wide` / `.container-narrow` — Layout widths
- `.section-padding` — Consistent vertical spacing
- `.prose-curantis` — Blog/long-form content styling

## Content Editing

### Blog Posts

Add MDX files to `content/blog/`:

```mdx
---
title: "Post Title"
date: "2026-04-01"
category: "Diabetes"
excerpt: "Short description"
author: "Dr. Darshan Singh Khangura"
readTime: "5 min read"
---

# Post content here...
```

### Synthetic Data

The following pages contain **placeholder/synthetic data** that needs to be replaced:

- **Fee Schedule** (`/fees`) — All prices are synthetic. Verify with Darshan.
- **Team** — Allied health bios are placeholders.
- **Contact** — Phone, fax, email are synthetic `(905) 555-xxxx`.
- **Blog** — Sample posts need real content or expansion.
- **Referral Form** — Form submission endpoint needs backend wiring.
- **Images** — All image slots show placeholder descriptions.

## TODO in Cursor

### High Priority
- [ ] Wire referral form to backend (API route → email/Accuro integration)
- [ ] Wire contact form to backend (API route → email)
- [ ] Connect `next-mdx-remote` for blog post rendering
- [ ] Add real images (use Nano Banana or stock)
- [ ] Replace synthetic phone/fax/email with real values
- [ ] Create downloadable referral PDF (`public/documents/`)
- [ ] Verify fee schedule with Darshan
- [ ] Verify privacy policy and ToS with legal review

### Medium Priority
- [ ] Add blog category filtering (client-side state)
- [ ] Add CPSO/OHIP number validation on referral form
- [ ] Implement cookie consent banner
- [ ] Add Google Analytics / PostHog tracking
- [ ] Create sitemap.xml and robots.txt
- [ ] Add 404 page
- [ ] OG image generation for blog posts

### Nice to Have
- [ ] Dark mode (design system supports it)
- [ ] French language support
- [ ] Patient portal link integration (Accuro)
- [ ] Appointment booking widget
- [ ] Newsletter signup (for blog)
- [ ] Install UI UX Pro Max skill in Cursor for design refinement

## Deployment (Vercel)

1. Push to GitHub
2. Connect repo to Vercel
3. Set domain: `curantiscare.ca`
4. Environment variables: None required for static site (add API keys when forms are wired)

```bash
# One-command deploy
npx vercel --prod
```

## Regulatory Notes

- **CPSO:** Dr. Darshan Singh Khangura, CPSO# 124706
- **PHIPA:** Privacy policy drafted against Ontario PHIPA requirements
- **Research consent:** Implied consent for anonymized data use (opt-out available)
- **AODA:** Accessibility compliance referenced in Terms of Service
- **Referral model:** Physician-only referral for OHIP services (FHO access bonus safe)

## License

Proprietary — Darshan Khangura Medicine Professional Corporation
