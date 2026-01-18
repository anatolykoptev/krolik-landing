# Krolik Landing — Cloudflare Pages Deployment Guide

## 🌐 Platform: Cloudflare Pages

**Current URL**: https://krolik.tools
**Deploy URL**: https://krolik-landing.pages.dev

---

## ⚠️ Critical Cloudflare Pages Constraints

### File Limits
- **Max file size**: 25 MiB per asset
- **Max total files**: 20,000 files per site
- **Large files**: Use R2 bucket + public URL (e.g., `static.krolik.tools`)

### Build Configuration
```yaml
Production branch: main
Build command: exit 0  # Static HTML, no build needed
Build directory: /     # Root directory serves index.html
```

### Mandatory Files
- **index.html** — MUST exist at root for `*.pages.dev` apex domain
- Missing `index.html` → 404 errors on apex domain

---

## 🎨 Design Principles

### Current Stack
- **Framework**: Static HTML + Tailwind CSS CDN
- **Fonts**: Google Fonts (Inter)
- **Images**: Whisk-generated illustrations in `/images/`

### Best Practices

#### 1. Performance
- ✅ Use CDN for external libraries (Tailwind, fonts)
- ✅ Optimize images (WebP preferred, < 500 KB each)
- ✅ Inline critical CSS for above-the-fold content
- ✅ Lazy load images below fold

#### 2. Responsive Design
- ✅ Mobile-first approach
- ✅ Test breakpoints: 375px (mobile), 768px (tablet), 1024px (desktop)
- ✅ Touch-friendly buttons (min 44x44px)

#### 3. Accessibility
- ✅ Semantic HTML5 elements
- ✅ Alt text for all images
- ✅ ARIA labels where needed
- ✅ Color contrast ratio ≥ 4.5:1

#### 4. SEO
- ✅ Meta description (< 160 chars)
- ✅ Open Graph tags for social sharing
- ✅ Structured data (JSON-LD) for rich snippets
- ✅ Canonical URL

---

## 📐 Layout Structure

```
index.html
├── Navigation (sticky)
├── Hero Section
│   ├── Headline: "Cut AI Costs by 90%"
│   ├── CTA buttons
│   └── Hero image (Whisk-generated)
├── Stats Section
├── Features (6 cards)
├── How It Works (3 steps)
├── Pricing (Free/Open Source)
├── CTA Section
└── Footer
```

---

## 🚫 Forbidden Patterns

### ❌ NO Server-Side Code
- No Node.js, Python, PHP
- No server-side rendering
- No dynamic routes
- Use Pages Functions ONLY if absolutely necessary

### ❌ NO Heavy Dependencies
- No large JS frameworks (React, Vue, Angular)
- Keep total JS < 100 KB
- Prefer vanilla JS for simple interactions

### ❌ NO Hardcoded API Keys
- Use Cloudflare Workers for API proxying
- Never expose keys in client-side code

---

## ✅ Allowed Enhancements

### Images
- **Format**: WebP (fallback to PNG/JPEG)
- **Dimensions**:
  - Hero: 1200x800px
  - Icons: 512x512px
  - Logos: 256x256px
- **Optimization**: TinyPNG, Squoosh, or ImageOptim
- **Naming**: `feature-name-1.webp` (descriptive, lowercase, hyphens)

### Animations
- **CSS only**: `transition`, `transform`, `@keyframes`
- **Libraries**: Lightweight only (< 10 KB)
  - Allowed: AOS.js (scroll animations)
  - Forbidden: GSAP, Lottie (too heavy)

### Interactivity
- Smooth scroll for anchor links
- Mobile menu toggle
- Modal dialogs (if needed)
- Form validation (client-side)

---

## 📦 File Structure

```
krolik-landing/
├── index.html           # Main page
├── CLAUDE.md           # This file
├── vercel.json         # Security headers
├── images/             # Whisk-generated assets
│   ├── logo.png
│   ├── hero.png
│   ├── feature-*.png
│   └── icon-*.png
└── _headers            # Cloudflare Pages headers (optional)
```

---

## 🎯 Design Improvement Goals

### Visual Enhancements
1. **Hero Section**
   - Add animated gradient background
   - Subtle parallax effect on hero image
   - Animated stat counters

2. **Features Section**
   - Icon animations on hover
   - Staggered card entrance (AOS)
   - Glassmorphism effect on cards

3. **Typography**
   - Improve hierarchy (font sizes, weights)
   - Better line height and spacing
   - Gradient text for key phrases

4. **Color Palette**
   - Primary: `#10b981` (green-500)
   - Secondary: `#3b82f6` (blue-500)
   - Accent: `#8b5cf6` (purple-500)
   - Neutral: Gray scale

5. **Micro-interactions**
   - Button hover effects
   - Link underline animations
   - Scroll progress indicator

### Content Improvements
1. Add **testimonials section** (future)
2. Add **demo video** or GIF
3. Add **code snippet examples**
4. Add **comparison table** (before/after costs)

---

## 🖼️ Whisk Image Generation Prompts

### Hero Image
```
Professional tech illustration showing AI model tiers (Free, Cheap, Mid, Premium)
as ascending steps or layers, with cost savings arrow pointing down.
Modern flat design, green-blue gradient, minimalist, 1200x800px
```

### Feature Icons
```
Modern minimalist icon: [feature name]
Single color (green/blue/purple), 512x512px, transparent background,
suitable for tech landing page
```

### Backgrounds
```
Abstract tech pattern: circuit board lines, data flow, AI nodes
Subtle, low opacity, suitable as section background, 1920x1080px
```

---

## 🚀 Deployment Checklist

- [ ] Run HTML validator (W3C)
- [ ] Test on mobile devices (iOS, Android)
- [ ] Check Lighthouse score (≥ 90 for all metrics)
- [ ] Verify meta tags (Open Graph, Twitter Cards)
- [ ] Test all links (internal, external)
- [ ] Optimize images (WebP, < 500 KB each)
- [ ] Add favicon (16x16, 32x32, 180x180)
- [ ] Configure _headers for caching
- [ ] Push to GitHub → auto-deploy to Cloudflare Pages

---

## 📚 References

- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Google Fonts](https://fonts.google.com/)
- [WebP Converter](https://squoosh.app/)
- [HTML Validator](https://validator.w3.org/)
- [Lighthouse](https://pagespeed.web.dev/)

---

**Last Updated**: 2026-01-18
**Maintained By**: Anatoly Koptev
