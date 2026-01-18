# Whisk Image Generation Guide for Krolik Landing

## 📋 Images Checklist

Total images needed: **10**

### Priority 1: Essential (4 images)
- [ ] OG Image (Open Graph for social sharing)
- [ ] Hero Image (main landing visual)
- [ ] Favicon Set (4 sizes)

### Priority 2: Feature Icons (6 images)
- [ ] Icon: Automatic Tier Selection
- [ ] Icon: Cascade Fallback
- [ ] Icon: History Learning
- [ ] Icon: Cost Estimation
- [ ] Icon: TypeScript Native
- [ ] Icon: Open Source

---

## 🎨 Image Specifications & Prompts

### 1. Open Graph Image (og-image.png)
**Dimensions**: 1200x630px
**Format**: PNG → WebP
**Purpose**: Social media sharing card

**Whisk Prompt**:
```
Professional tech product card for "Krolik Felix - Cut AI Costs by 90%"
Modern flat design with green-blue gradient background
Central focus: Large "90%" text with downward cost arrow
Subtitle: "Multi-Tier AI Orchestration"
Cute rabbit mascot icon in corner
Tech aesthetic, minimalist, Tailwind color palette
1200x630px, high contrast for readability
```

---

### 2. Hero Image (hero.png)
**Dimensions**: 1200x800px
**Format**: PNG → WebP
**Purpose**: Main landing page hero visual

**Whisk Prompt**:
```
Professional tech illustration showing AI model tiers as ascending steps
Four distinct levels labeled: "Free", "Cheap", "Mid", "Premium"
Large downward-pointing arrow showing cost reduction from $1500 to $150
Modern flat design with green (#10b981) to blue (#3b82f6) gradient
Minimalist style, tech aesthetic, suitable for SaaS landing page
Cute rabbit mascot at bottom celebrating savings
1200x800px, transparent or white background
```

---

### 3. Favicon Set (favicon-*.png)

#### 3a. favicon-16x16.png
**Whisk Prompt**:
```
Minimalist rabbit icon for favicon
Simple geometric shapes, 2-3 colors max
Green (#10b981) and white color scheme
Recognizable at tiny 16x16 pixel size
Flat design, high contrast
```

#### 3b. favicon-32x32.png
**Whisk Prompt**:
```
Minimalist rabbit icon for favicon
Simple geometric shapes, 2-3 colors max
Green (#10b981) and white color scheme
Recognizable at 32x32 pixel size
Flat design, high contrast, slightly more detail than 16px version
```

#### 3c. apple-touch-icon-180x180.png
**Whisk Prompt**:
```
iOS app icon style rabbit mascot
Cute, friendly rabbit face with happy expression
Green (#10b981) to blue (#3b82f6) gradient background
Rounded square format, modern flat design
180x180px, optimized for Apple devices
```

#### 3d. android-chrome-512x512.png
**Whisk Prompt**:
```
Android app icon style rabbit mascot
Cute, friendly rabbit character (full body or face)
Green (#10b981) to blue (#3b82f6) gradient background
Circular or rounded square format
512x512px, material design aesthetic
```

---

### 4. Feature Icon: Automatic Tier Selection (icon-auto-tier.png)
**Dimensions**: 512x512px
**Format**: PNG → WebP
**Purpose**: Features section icon

**Whisk Prompt**:
```
Modern minimalist icon: AI brain with tiered layers
Four horizontal tiers/levels in different colors
Arrows showing automatic routing between levels
Green (#10b981) and blue (#3b82f6) accent colors
512x512px, transparent background
Flat design, suitable for tech landing page
```

---

### 5. Feature Icon: Cascade Fallback (icon-cascade.png)
**Dimensions**: 512x512px

**Whisk Prompt**:
```
Modern minimalist icon: waterfall cascade with upward arrow
Multiple levels cascading downward
Safety net catching at bottom
Green (#10b981) and blue (#3b82f6) colors
512x512px, transparent background
Tech icon style, flat design
```

---

### 6. Feature Icon: History Learning (icon-learning.png)
**Dimensions**: 512x512px

**Whisk Prompt**:
```
Modern minimalist icon: database with brain/neural network
Data flowing into learning system
Lightbulb or sparkle indicating intelligence
Green (#10b981) and purple (#8b5cf6) accent colors
512x512px, transparent background
Tech aesthetic, flat design
```

---

### 7. Feature Icon: Cost Estimation (icon-cost.png)
**Dimensions**: 512x512px

**Whisk Prompt**:
```
Modern minimalist icon: calculator or chart with dollar signs
Downward trending arrow showing savings
Coins or money symbols with green color
Green (#10b981) primary color
512x512px, transparent background
Financial tech icon style, flat design
```

---

### 8. Feature Icon: TypeScript Native (icon-typescript.png)
**Dimensions**: 512x512px

**Whisk Prompt**:
```
Modern minimalist icon: TypeScript "TS" logo integration
Code brackets or terminal window
Blue (#3b82f6) TypeScript brand color
Geometric, clean, professional
512x512px, transparent background
Developer tool aesthetic, flat design
```

---

### 9. Feature Icon: Open Source (icon-opensource.png)
**Dimensions**: 512x512px

**Whisk Prompt**:
```
Modern minimalist icon: open box with code/stars flowing out
GitHub-style fork/star symbols
Heart or community symbols
Green (#10b981) and blue (#3b82f6) colors
512x512px, transparent background
Open source community aesthetic, flat design
```

---

## 🔄 Post-Generation Workflow

### Step 1: Generate via Whisk
1. Go to Google Whisk (https://labs.google/fx/tools/whisk)
2. Use prompts above for each image
3. Download as PNG files

### Step 2: Optimize & Convert
```bash
cd krolik-landing/images

# Install conversion tools (if needed)
brew install webp

# Convert PNG to WebP (70-90% smaller)
cwebp -q 85 og-image.png -o og-image.webp
cwebp -q 85 hero.png -o hero.webp
cwebp -q 85 icon-auto-tier.png -o icon-auto-tier.webp
# ... repeat for all images

# Verify sizes (should be < 500 KB each)
ls -lh *.webp
```

### Step 3: Update HTML References
Update [index.html](index.html) image paths:

```html
<!-- Hero Section -->
<img src="images/hero.webp" alt="Krolik Felix AI Cost Optimization">

<!-- Features Section -->
<img src="images/icon-auto-tier.webp" alt="Automatic Tier Selection">
<img src="images/icon-cascade.webp" alt="Cascade Fallback">
<!-- ... etc -->
```

### Step 4: Update Meta Tags
Update OG image in `<head>`:

```html
<meta property="og:image" content="https://krolik.tools/images/og-image.webp">
<meta name="twitter:image" content="https://krolik.tools/images/og-image.webp">
```

---

## 📏 File Size Targets

| Image Type | Max Size | Target Size |
|------------|----------|-------------|
| OG Image | 500 KB | 200 KB |
| Hero | 500 KB | 300 KB |
| Favicons | 50 KB each | 20 KB |
| Feature Icons | 200 KB each | 80 KB |

**Total Budget**: < 2 MB for all images

---

## ✅ Quality Checklist

Before deploying, verify:

- [ ] All images < max file size
- [ ] WebP format with PNG fallback
- [ ] Images load on mobile (3G speed test)
- [ ] Alt text added to all `<img>` tags
- [ ] OG image displays correctly on Twitter/Facebook
- [ ] Favicons display in all browsers
- [ ] Icons maintain clarity when scaled
- [ ] Color consistency across all images
- [ ] Transparent backgrounds where needed

---

## 🎨 Brand Colors Reference

Use these exact colors for consistency:

```css
--primary-green: #10b981    /* Tailwind green-500 */
--primary-blue: #3b82f6     /* Tailwind blue-500 */
--accent-purple: #8b5cf6    /* Tailwind purple-500 */
--background: #f9fafb       /* Tailwind gray-50 */
--text-dark: #111827        /* Tailwind gray-900 */
```

---

## 🚀 Deployment

After images are ready:

1. Place all images in `krolik-landing/images/` folder
2. Commit to git: `git add images/ && git commit -m "Add Whisk-generated images"`
3. Push to main branch
4. Cloudflare Pages auto-deploys
5. Verify at https://krolik.tools

---

**Generated**: 2026-01-18
**For**: Krolik Landing Page v1.0
