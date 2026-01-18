# Cloudflare Pages Documentation Cache

**Source**: Context7 - /websites/developers_cloudflare_pages
**Fetched**: 2026-01-18
**Code Snippets Available**: 972
**Reputation**: High
**Benchmark Score**: 77

---

## Deployment Limits

### File Size Limits
Source: https://developers.cloudflare.com/pages/platform/limits

- **Maximum file size**: 25 MiB per asset
- **Larger files solution**:
  - Upload to R2 storage with public bucket feature
  - Use custom domains (e.g., `static.example.com`) for serving

### File Count Limits
Source: https://developers.cloudflare.com/pages/platform/limits

- **Maximum files**: 20,000 files per site
- Files are uploaded to Cloudflare's globally distributed network
- Ensures low latency delivery to all users

---

## Build Configuration

### Static HTML Sites (No Build Process)

```yaml
Production branch: main
Build command: exit 0
Build directory: /
```

**Explanation**:
- `exit 0`: No build needed for static HTML
- `/`: Root directory serves `index.html` directly

### Gatsby Sites

```yaml
Production branch: main
Build command: npx gatsby build
Build directory: public
```

Source: https://developers.cloudflare.com/pages/framework-guides/deploy-a-gatsby-site

### VitePress Sites

```bash
Production branch: main
Build command: npx vitepress build
Build directory: .vitepress/dist
```

Source: https://developers.cloudflare.com/pages/framework-guides/deploy-a-vitepress-site

### Next.js Static Sites

```yaml
Production branch: main
Build command: npx next build
Build directory: out
```

Source: https://developers.cloudflare.com/pages/framework-guides/nextjs/deploy-a-static-nextjs-site

---

## Optimization Best Practices

### Image Optimization
- **Use WebP format**: 50-70% smaller than PNG
- **Target**: Keep all images under 100 KB each
- **Total page weight**: Under 400 KB for optimal performance

### External Dependencies
- **Tailwind CSS**: Use CDN instead of local build
- **Google Fonts**: Load via CDN
- **JavaScript libraries**: Prefer CDN over bundling

### Critical CSS
- **Inline critical CSS**: Faster first paint
- **Defer non-critical styles**: Load after page render

### File Structure
```
/
├── index.html          (< 50 KB)
├── images/
│   ├── hero.webp       (< 100 KB)
│   ├── icon-1.webp     (< 50 KB)
│   └── logo.webp       (< 30 KB)
└── favicon.ico         (< 20 KB)
```

---

## Global Network Features

### CDN Distribution
- Files uploaded to Cloudflare's edge network
- Automatically cached at 200+ data centers worldwide
- Low latency for users globally

### Automatic Caching
- Static assets cached indefinitely
- Cache invalidation on new deployments
- No manual purge required

---

## Deployment Process

### Git Integration
1. Connect GitHub/GitLab repository
2. Select production branch (`main`)
3. Configure build settings
4. Automatic deployments on push

### Direct Upload
- Upload static files via Wrangler CLI
- Useful for non-Git workflows
- Max 20,000 files, 25 MiB per file

---

## Performance Recommendations

### For krolik-landing Project

Current status:
- ✅ Images: 132 KB total (4 WebP files)
- ✅ HTML: ~46 KB (compressed)
- ✅ Dependencies: Tailwind CDN, Google Fonts CDN
- ✅ JavaScript: ~5 KB (vanilla, no frameworks)

**Total page weight**: ~185 KB (under 400 KB target) ✅

### Future Scaling
- **20,000 file limit**: Plenty for landing page
- **25 MiB per file**: All assets well under limit
- **CDN network**: Global performance guaranteed

---

## Related Documentation

- **Main docs**: https://developers.cloudflare.com/pages
- **Platform limits**: https://developers.cloudflare.com/pages/platform/limits
- **Framework guides**: https://developers.cloudflare.com/pages/framework-guides
- **R2 storage** (for large files): https://developers.cloudflare.com/r2

---

**Last updated**: 2026-01-18
**Context7 Library ID**: /websites/developers_cloudflare_pages
**Use for**: Future krolik-landing updates, new deployments
