# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Sulimet is a static corporate website for an industrial solutions company (metalurgy/machining). Built with vanilla HTML, CSS, and JavaScript—no build tools, bundlers, or package managers.

**Two Pages:**
- `index.html` - Main homepage with hero, about, services/history timeline, global presence, contact
- `metalworking.html` - Dedicated metalworking services page with capabilities, certifications, materials

## Development

```bash
npx serve .
# or
python -m http.server 8000
```

No build step, no tests, no linter. Verification is manual browser testing.

## Deployment

GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml`). Deploys on push to `main`. The workflow handles Git LFS checkout for `.mp4` video files (tracked in `.gitattributes`).

## Architecture

**Script Load Order (Critical):**
Scripts must load in this exact order — `translations.js` defines globals that other scripts depend on:
1. `js/translations.js` — i18n system, defines `translations` object, `t()`, `switchLanguage()`, `updateTranslations()`
2. `js/main.js` — index.html only: carousel, counters, contact form, parallax, notifications
3. `js/metalworking.js` — metalworking.html only: staggered fade-in, smooth scroll

Each page loads `translations.js` first, then its own page-specific script. `main.js` and `metalworking.js` are never loaded together.

**CSS Architecture:**
- CSS variables defined in `:root` in `css/styles.css` — colors, fonts, transitions, shadows
- `css/metalworking.css` extends `styles.css` for the metalworking page
- All sizing uses `rem` units (not `px`), with `clamp()` for fluid responsive values
- Primary brand gradient: `linear-gradient(90deg, #CF132B 0%, #7B0B1A 100%)`
- Brand text color: `#3f3a34` (used in value cards, stats, body text)
- Sections alternate between `--bg-light` (#f8f9fa) and white backgrounds
- Responsive breakpoints: 64rem/1024px (tablets), 48rem/768px (mobile landscape), 30rem/480px (mobile portrait)
- Fonts: Microgramma (local, `assets/fonts/`) for headings (`--font-display`), Montserrat + Michroma from Google Fonts for body (`--font-primary`)
- Metalworking page uses `.body-title` class for section H2s (red, `3.125rem`) with adjacent `p` styling

**i18n System:**
- HTML elements use `data-i18n="key.path"` attributes (e.g., `data-i18n="nav.about"`)
- Flat dot-notation keys in `translations.en` and `translations.pt` objects inside `js/translations.js`
- `switchLanguage(lang)` updates all `[data-i18n]` elements and persists to `localStorage` key `sulimet-lang`
- For `<input>`/`<textarea>`, updates `placeholder`; for everything else, updates `innerHTML` (supports HTML in translation values like `<strong>`, `<br>`)
- `t(key)` helper returns translated string for use in JS (e.g., notification messages)
- Language toggle buttons use `.lang-btn[data-lang]` with active state managed by `updateTranslations()`
- **When adding new translatable content, ALWAYS add both EN and PT translations**

**Key JavaScript Patterns:**
- History carousel: responsive items-per-view (1 on mobile <=768px, 2 on tablet <=1024px, 3 on desktop). Dot navigation auto-generated. Touch/swipe with 50px threshold.
- Stat counters: animate on scroll into view, reset to 0 when scrolled out (replays every time). Uses `IntersectionObserver` on `.global` section.
- Fade-in animations: `.fade-in` class + `IntersectionObserver` adds `.visible` (one-time, unobserves after).
- Contact form: client-side validation only, simulated submission (no backend).
- Notifications: `showNotification(message, type)` creates fixed-position toast with slide animation.
- Smooth scroll: anchor links offset by 80px (index) / 100px (metalworking) for fixed header.
- Hero parallax: background video translates at 0.5x scroll speed.

**Metalworking Page:**
- Loads both `css/styles.css` and `css/metalworking.css` (metalworking.css overrides container max-width to `none` with `5rem` padding)
- Category tabs (`.category-tab[data-category]`) — Automotive, Food, Industrial
- Service split sections use `.reverse` class for alternating image/text layouts
- Has its own footer (`.footer-metalworking`) with different layout and certification logos
- Fade-in uses staggered delay (`index * 100ms`) unlike index.html's instant reveal

**SEO Setup:**
- Both pages have Open Graph, Twitter Card, and hreflang meta tags
- JSON-LD structured data (Organization on index, Service on metalworking)
- `sitemap.xml` and `robots.txt` at root
- Language variants use `?lang=pt` query parameter in hreflang

**Git LFS:**
`.mp4` video files are tracked via Git LFS (`.gitattributes`). The deploy workflow verifies LFS files are actual binaries, not pointers.

**Non-web files at root:**
`meltaworking.pdf`, `meltaworking_compressed.pdf`, and `item_description.txt` are reference/source documents — not served as part of the site and not linked from any HTML page. Do not remove them, but do not add links to them without explicit instruction.

## Adding New Content

**Adding Translatable Text:**
1. Add HTML element with `data-i18n="section.key"` attribute
2. Add the key to BOTH `translations.en` and `translations.pt` in `js/translations.js`
3. Use flat dot-notation keys (e.g., `"contact.form.name"`)

**Adding New Sections:**
- Follow alternating background pattern (`.bg-light` vs white)
- Use standard structure: `<section>` → `.container` → `.section-title` + content
- Add `.fade-in` class for scroll animation
