# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Sulimet is a static corporate website for an industrial solutions company (metalurgy/machining). Built with vanilla HTML, CSS, and JavaScript—no build tools, bundlers, or package managers.

**Six Pages:**
- `index.html` - Main homepage with hero, about, services/history timeline, global presence, contact
- `metalworking.html` - Dedicated metalworking services page with capabilities, certifications, materials
- `electrical-systems.html` - Dedicated electrical systems/wiring harnesses page with hero crossfade slider
- `downloads.html` - Certificate/document downloads page (links PDFs from `assets/downloads/`)
- `privacy-policy.html` - GDPR/RGPD privacy policy page (bilingual, static content)
- `contacts.html` - Aggregated contacts page (Portugal + Morocco × Metalworking + Electrical Systems). Header nav `nav.contact` and footer Info-column `footer.info.contact` link here from every page; per-page `#contacts` sections in `metalworking.html` and `electrical-systems.html` are intentionally kept as in-page anchors

## Development

```bash
npx serve .
# or
python -m http.server 8000
```

No build step, no tests, no linter. Verification is manual browser testing.

## Deployment

GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml`). Deploys on push to `main`. Custom domain `www.sulimet.com` is bound via the root `CNAME` file (must ship with every deploy — don't gitignore it). Video assets (`.mp4`) are hosted as GitHub release assets on the `v1-assets` tag and referenced by absolute URL — they are not in the repo.

## Architecture

**Script Load Order (Critical):**
Scripts must load in this exact order — `translations.js` defines globals that other scripts depend on:
1. `js/translations.js` — i18n system, defines `translations` object, `t()`, `switchLanguage()`, `updateTranslations()`
2. One page-specific script (never more than one per page):
   - `js/main.js` — index.html: carousel, counters, contact form, parallax, notifications
   - `js/metalworking.js` — metalworking.html: staggered fade-in, smooth scroll, category column toggling
   - `js/electrical-systems.js` — electrical-systems.html: hero crossfade slider, fade-in animations
   - `js/downloads.js` — downloads.html: staggered fade-in observer + applies stored language
   - `js/contacts.js` — contacts.html: staggered fade-in observer + applies stored language
   - `js/privacy-policy.js` — privacy-policy.html: only applies stored language on load

Each page loads `translations.js` first, then its own page-specific script. Page scripts are never loaded together.

**Always wrap `video.play()` in `.catch()`.** iOS Safari rejects the play() promise under Low Power Mode; unhandled rejections freeze the capability-card videos on the first frame.

**CSS Architecture:**
- CSS variables defined in `:root` in `css/styles.css` — colors, fonts, transitions, shadows
- `css/metalworking.css` extends `styles.css` for the metalworking page
- `css/electrical-systems.css` extends `styles.css` for the electrical systems page
- `css/downloads.css` extends `styles.css` for the downloads page
- `css/privacy-policy.css` extends `styles.css` for the privacy policy page
- `css/contacts.css` extends `styles.css` for the contacts page (also clones the contact-card rules from `metalworking.css` so contacts.html does not need to load metalworking.css)
- `downloads.html`, `contacts.html`, and `privacy-policy.html` reuse `.footer-metalworking` markup/styles (defined in `metalworking.css`) — editing that footer affects five pages, not one
- All sizing uses `rem` units (not `px`), with `clamp()` for fluid responsive values
- Primary brand gradient: `linear-gradient(90deg, #CF132B 0%, #7B0B1A 100%)`
- Brand text color: `#3f3a34` (used in value cards, stats, body text)
- Sections alternate between `--bg-light` (#f8f9fa) and white backgrounds
- Responsive breakpoints: 64rem/1024px (tablets), 48rem/768px (mobile landscape), 30rem/480px (mobile portrait)
- Fonts: Microgramma (local, `assets/fonts/`) for headings (`--font-display`), Montserrat from Google Fonts for body (`--font-primary`)
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
- Category columns (`.category-column[data-category]`) — Automotive, Food, Industrial. Click-based (also keyboard accessible: Enter/Space). `setActiveCategory(cat)` sets `stage.dataset.active`, toggles `.active` on `.category-column`, and manages `aria-pressed`.
- Hero annotation stage has **three** images (`#hero-img-front` automotive, `#hero-img-food`, `#hero-img-industrial`) and **three** annotation overlays (`#hero-annotations`, `#hero-annotations-food`, `#hero-annotations-industrial`). Active image/overlay gets `.hero-img-active` / `.hero-annotations-active`. Defaults to `automotive` on load.
- Service split sections use `.reverse` class for alternating image/text layouts
- Has its own footer (`.footer-metalworking`) with different layout and certification logos
- Fade-in uses staggered delay (`index * 100ms`) unlike index.html's instant reveal

**Electrical Systems Page:**
- Loads both `css/styles.css` and `css/electrical-systems.css`
- Hero crossfade slider: 5s auto-advance, 1s CSS fade transition, dot navigation, keyboard accessible (ArrowLeft/ArrowRight)
- Has its own footer (`.footer-electrical`) similar to metalworking page
- Fade-in animations use staggered delay like metalworking page
- No dedicated `assets/electrical-systems/` directory — images referenced directly from `assets/images/`

**SEO Setup:**
- All pages have Open Graph, Twitter Card, and hreflang meta tags
- JSON-LD structured data: Organization on index; Service + BreadcrumbList on metalworking and electrical-systems; BreadcrumbList on downloads and privacy-policy
- `sitemap.xml` and `robots.txt` at root
- Language variants use `?lang=pt` query parameter in hreflang
- When adding any new page, always update `sitemap.xml` in the same change.

**Video Assets:**
`.mp4` files are hosted as GitHub release assets (tag `v1-assets`) to avoid Git LFS bandwidth costs. HTML `<source>` tags reference them via `https://github.com/Braganca95/sulimet/releases/download/v1-assets/<name>.mp4`. To add or replace a video, upload to the release with `gh release upload v1-assets <file>` and update HTML src accordingly.

**PDFs:**
- `assets/downloads/*.pdf` — certification PDFs (IATF 16949 / ISO 9001) served and linked from `downloads.html`. Add new public certificates here.
- `assets/financiamentos.pdf`, `assets/ficha-projeto-prr.pdf`, `assets/Ficha_de_OperacaoA4.pdf` — EU/PRR/COMPETE 2030 funding documentation (footer "PRR" link + `downloads.html` PRR section on every page). Add new funding-scheme PDFs at `assets/` root, not `assets/downloads/`.
- Root-level `meltaworking.pdf`, `meltaworking_compressed.pdf`, `cablagens_compressed.pdf`, and `item_description.txt` are reference/source documents — not linked from any HTML page. Do not remove them, but do not add links to them without explicit instruction.

**EU/PRR Funding Bar (footer, every page):**
Every page footer includes two `.funding-bar` blocks displaying co-financing logos — `assets/images/barra-logos.png` (PRR/NextGenerationEU) and `assets/images/compete2030-logos.png` (COMPETE 2030/Portugal 2030). This is mandated compliance content, not decorative — don't remove or resize without explicit instruction. Adding a new funding-scheme document means updating the footer link/logo, the `downloads.html` PRR section, and both `translations.en`/`translations.pt` on all six pages.

**Deployment artifact scope:**
`deploy.yml` uploads the entire repo (`path: "."`) to GitHub Pages, so anything committed at root ships to production. `.gitignore` excludes root-level `*.png` (visual-verification screenshots) going forward, but ~45 screenshots committed before that rule was added remain tracked and deployed as-is. Don't `git add` new screenshots/scratch files at root — they should already be caught by `.gitignore`, but double-check with `git status` if adding one manually.

## Adding New Content

**Adding Translatable Text:**
1. Add HTML element with `data-i18n="section.key"` attribute
2. Add the key to BOTH `translations.en` and `translations.pt` in `js/translations.js`
3. Use flat dot-notation keys (e.g., `"contact.form.name"`)

**Adding New Sections:**
- Follow alternating background pattern (`.bg-light` vs white)
- Use standard structure: `<section>` → `.container` → `.section-title` + content
- Add `.fade-in` class for scroll animation
