# Downloads Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a new public `downloads.html` page with three sections (Metalworking, Electrical Systems, PRR) modeled on sisma.pt/downloads, listing 8 downloadable PDFs as plain text links.

**Architecture:** Static page following the existing Sulimet pattern — HTML + dedicated CSS file + small page-specific JS. Reuses design tokens from `css/styles.css`. Page-specific script loads after `translations.js`. New `assets/downloads/` directory holds 7 cert PDFs copied from `~/Downloads/`; PRR uses the existing `assets/financiamentos.pdf`.

**Tech Stack:** Vanilla HTML5 / CSS (`--bg-light`, brand gradient, Microgramma + Montserrat) / ES6 JS / no build tools.

---

## Context for the Engineer

This repo is a plain static site. No framework, no build step, no tests, no lint. Verify by serving locally:

```bash
cd /Users/pedrobraganca/Projectos/sulimet
npx serve .
```

**Critical conventions** (from `CLAUDE.md`):
- Scripts must load in order: `translations.js` first, then the page-specific script.
- Every translatable string needs an entry in BOTH `translations.en` and `translations.pt` in `js/translations.js`.
- Use `rem` units, not `px`. Use `clamp()` for fluid responsive values.
- Follow alternating white / `--bg-light` background pattern between sections.
- Brand gradient: `linear-gradient(90deg, #CF132B 0%, #7B0B1A 100%)`.
- Breakpoints: `64rem` (1024px), `48rem` (768px), `30rem` (480px).

**Spec:** `docs/superpowers/specs/2026-04-21-downloads-page-design.md`.

---

## File Structure

**New files:**
- `downloads.html` — page markup.
- `css/downloads.css` — page-specific styles (extends `css/styles.css`).
- `js/downloads.js` — fade-in observer + language toggle wiring.
- `assets/downloads/` — new directory with 7 cert PDFs copied from `~/Downloads/`.

**Modified files:**
- `js/translations.js` — add 14 new `downloads.*` keys in both `en` and `pt` blocks.
- `sitemap.xml` — add `<url>` entry for `downloads.html`.

**Untouched (per spec non-goal "no links from other pages"):**
- `index.html`, `metalworking.html`, `electrical-systems.html` — existing `href="#"` footer Downloads stubs stay as-is.
- `css/styles.css`, `css/metalworking.css`, `css/electrical-systems.css`
- `js/main.js`, `js/metalworking.js`, `js/electrical-systems.js`
- `assets/financiamentos.pdf` stays in place (referenced by 3 existing pages).
- `robots.txt` (already allows all).

---

## Task 1: Copy PDFs into the repo

**Files:**
- Create: `assets/downloads/` (directory)
- Create: 7 PDF files inside it

- [ ] **Step 1: Create the downloads assets directory**

```bash
mkdir -p /Users/pedrobraganca/Projectos/sulimet/assets/downloads
```

- [ ] **Step 2: Copy 7 cert PDFs from ~/Downloads, renaming to lowercase .pdf**

```bash
cp "/Users/pedrobraganca/Downloads/00034858-QMS-ENGUS-UKAS.PDF"        "/Users/pedrobraganca/Projectos/sulimet/assets/downloads/00034858-qms-engus-ukas.pdf"
cp "/Users/pedrobraganca/Downloads/00034858-QMS-PORPT-UKAS.PDF"        "/Users/pedrobraganca/Projectos/sulimet/assets/downloads/00034858-qms-porpt-ukas.pdf"
cp "/Users/pedrobraganca/Downloads/CertificadoGA-2026-0009_IN_2026-01-19.pdf" "/Users/pedrobraganca/Projectos/sulimet/assets/downloads/certificado-ga-2026-0009.pdf"
cp "/Users/pedrobraganca/Downloads/00042307-QMS-ENGUS-UKAS.PDF"        "/Users/pedrobraganca/Projectos/sulimet/assets/downloads/00042307-qms-engus-ukas.pdf"
cp "/Users/pedrobraganca/Downloads/00042306-001-16949-ENGUS-IATF.PDF"  "/Users/pedrobraganca/Projectos/sulimet/assets/downloads/00042306-iatf-16949.pdf"
cp "/Users/pedrobraganca/Downloads/0030260-QMS-ENGUS-UKAS.PDF"         "/Users/pedrobraganca/Projectos/sulimet/assets/downloads/0030260-qms-engus-ukas.pdf"
cp "/Users/pedrobraganca/Downloads/0030401-001-16949-ENGUS-IATF.PDF"   "/Users/pedrobraganca/Projectos/sulimet/assets/downloads/0030401-iatf-16949.pdf"
```

- [ ] **Step 3: Verify all 7 files present**

```bash
ls -1 /Users/pedrobraganca/Projectos/sulimet/assets/downloads
```

Expected output (7 lowercase filenames, exactly):

```
0030260-qms-engus-ukas.pdf
0030401-iatf-16949.pdf
00034858-qms-engus-ukas.pdf
00034858-qms-porpt-ukas.pdf
00042306-iatf-16949.pdf
00042307-qms-engus-ukas.pdf
certificado-ga-2026-0009.pdf
```

- [ ] **Step 4: Sanity-check PDFs are valid (first bytes should be `%PDF`)**

```bash
for f in /Users/pedrobraganca/Projectos/sulimet/assets/downloads/*.pdf; do
  head -c 4 "$f" | xxd | head -1
done
```

Expected: every line starts with `25504446` (hex for `%PDF`).

- [ ] **Step 5: Commit**

```bash
cd /Users/pedrobraganca/Projectos/sulimet
git add assets/downloads/
git commit -m "$(cat <<'EOF'
Add certification PDFs for downloads page

Copies 7 cert PDFs from user Downloads into assets/downloads/ with
lowercase normalized filenames. Files power the new downloads.html
page (metalworking + electrical-systems sections).

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>
EOF
)"
```

---

## Task 2: Add i18n keys to translations.js

**Files:**
- Modify: `js/translations.js` (add 14 keys to `translations.en` block, 14 keys to `translations.pt` block)

The file has this top-level shape:

```js
const translations = {
    en: {
        // ... many "nav.*", "hero.*", "about.*", etc. keys ...
        "electrical.footer.info.downloads": "Downloads"   // last en key, line 247
    },
    pt: {
        // ... mirror of en ...
        "electrical.footer.info.downloads": "Downloads"   // last pt key, line 493
    }
};
```

We're adding a new `downloads.*` key group at the END of each language block, just before the closing `}`.

- [ ] **Step 1: Read the file to confirm current structure**

```bash
sed -n '240,260p' /Users/pedrobraganca/Projectos/sulimet/js/translations.js
sed -n '485,500p' /Users/pedrobraganca/Projectos/sulimet/js/translations.js
```

Expect: line 247 ends with `"electrical.footer.info.downloads": "Downloads"` followed by closing `},` on line 248. Line 493 the same for `pt`.

- [ ] **Step 2: Add EN keys**

In `js/translations.js`, find the line:

```js
        "electrical.footer.info.downloads": "Downloads"
```

that appears inside the `en: {` block (around line 247). Replace it with:

```js
        "electrical.footer.info.downloads": "Downloads",

        // Downloads Page
        "downloads.title": "Downloads",
        "downloads.tagline": "Precision in every detail",
        "downloads.prefix": "Downloads",
        "downloads.section.metalworking": "Metalworking",
        "downloads.section.electrical": "Electrical Systems",
        "downloads.section.prr": "PRR",
        "downloads.files.iso9001_en": "ISO 9001 Certificate (EN)",
        "downloads.files.iso9001_pt": "ISO 9001 Certificate (PT)",
        "downloads.files.quality_env": "Quality & Environmental Certificate",
        "downloads.files.iso9001_elec_1": "ISO 9001 Certificate",
        "downloads.files.iatf16949_1": "IATF 16949 Certificate",
        "downloads.files.iso9001_elec_2": "ISO 9001 Certificate (2)",
        "downloads.files.iatf16949_2": "IATF 16949 Certificate (2)",
        "downloads.files.prr_datasheet": "PRR Project Technical Datasheet"
```

Note: the original line gains a trailing comma because more keys follow.

- [ ] **Step 3: Add PT keys**

In `js/translations.js`, find the line:

```js
        "electrical.footer.info.downloads": "Downloads"
```

that appears inside the `pt: {` block (around line 493, the SECOND occurrence). Replace it with:

```js
        "electrical.footer.info.downloads": "Downloads",

        // Downloads Page
        "downloads.title": "Downloads",
        "downloads.tagline": "Precisão em cada detalhe",
        "downloads.prefix": "Downloads",
        "downloads.section.metalworking": "Metalomecânica",
        "downloads.section.electrical": "Sistemas Elétricos",
        "downloads.section.prr": "PRR",
        "downloads.files.iso9001_en": "Certificado ISO 9001 (EN)",
        "downloads.files.iso9001_pt": "Certificado ISO 9001 (PT)",
        "downloads.files.quality_env": "Certificado de Qualidade e Ambiente",
        "downloads.files.iso9001_elec_1": "Certificado ISO 9001",
        "downloads.files.iatf16949_1": "Certificado IATF 16949",
        "downloads.files.iso9001_elec_2": "Certificado ISO 9001 (2)",
        "downloads.files.iatf16949_2": "Certificado IATF 16949 (2)",
        "downloads.files.prr_datasheet": "Ficha Técnica do Projeto PRR"
```

- [ ] **Step 4: Verify JS still parses (no syntax errors)**

```bash
node --check /Users/pedrobraganca/Projectos/sulimet/js/translations.js && echo OK
```

Expected: `OK`. Node's `--check` flag does syntax-only validation without executing the file.

- [ ] **Step 5: Verify both en and pt have all 14 new keys**

```bash
grep -c '"downloads\.' /Users/pedrobraganca/Projectos/sulimet/js/translations.js
```

Expected: `28` (14 en + 14 pt).

- [ ] **Step 6: Commit**

```bash
cd /Users/pedrobraganca/Projectos/sulimet
git add js/translations.js
git commit -m "$(cat <<'EOF'
Add EN/PT translations for downloads page

14 new keys under "downloads.*" covering page title, tagline, section
headings, row prefix, and 8 file titles. Mirrored in pt block.

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>
EOF
)"
```

---

## Task 3: Create css/downloads.css

**Files:**
- Create: `css/downloads.css`

- [ ] **Step 1: Create the file with full contents**

Write exactly this to `/Users/pedrobraganca/Projectos/sulimet/css/downloads.css`:

```css
/* ============================================================
   Downloads Page
   Extends css/styles.css. Depends on CSS variables defined
   in :root of the base stylesheet.
   ============================================================ */

/* ----- Page hero strip ----- */
.downloads-hero {
    background: linear-gradient(90deg, #CF132B 0%, #7B0B1A 100%);
    color: #fff;
    padding: clamp(4rem, 8vw, 6rem) 0;
    text-align: center;
}

.downloads-hero h1 {
    font-family: var(--font-display);
    font-size: clamp(2.5rem, 5vw, 4rem);
    letter-spacing: 0.04em;
    text-transform: uppercase;
    margin: 0 0 0.75rem 0;
    line-height: 1.1;
}

.downloads-hero .downloads-tagline {
    font-size: 1.125rem;
    color: rgba(255, 255, 255, 0.85);
    margin: 0;
    font-weight: 300;
}

/* ----- Section blocks ----- */
.downloads-section {
    padding: clamp(3rem, 6vw, 5rem) 0;
}

.downloads-section.bg-light {
    background-color: var(--bg-light, #f8f9fa);
}

.downloads-section h2.body-title {
    color: #CF132B;
    font-family: var(--font-display);
    font-size: 3.125rem;
    line-height: 1.1;
    margin: 0 0 0.75rem 0;
}

.downloads-section .section-divider {
    display: block;
    width: 4rem;
    height: 2px;
    background-color: #CF132B;
    border: 0;
    margin: 0 0 2rem 0;
}

/* ----- File list ----- */
.download-list {
    list-style: none;
    margin: 0;
    padding: 0;
}

.download-row {
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
}

.download-row:last-child {
    border-bottom: 0;
}

.download-row a {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1rem 0.5rem;
    text-decoration: none;
    color: inherit;
    transition: background-color 0.2s ease, color 0.2s ease;
}

.download-row a:hover {
    background-color: rgba(207, 19, 43, 0.03);
}

.download-row a:hover .file-title,
.download-row a:focus-visible .file-title {
    color: #CF132B;
}

.download-row a:focus-visible {
    outline: 2px solid #CF132B;
    outline-offset: 2px;
}

.file-prefix {
    color: #6b6b6b;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    font-size: 0.75rem;
    font-weight: 600;
    flex-shrink: 0;
}

.file-sep {
    color: #c6c6c6;
    flex-shrink: 0;
}

.file-title {
    color: #3f3a34;
    font-weight: 500;
    font-size: 1.0625rem;
    transition: color 0.2s ease;
}

/* ----- Responsive ----- */
@media (max-width: 48rem) {
    .downloads-section h2.body-title {
        font-size: 2rem;
    }

    .download-row a {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.25rem;
        padding: 0.875rem 0.5rem;
    }

    .file-sep {
        display: none;
    }
}

@media (max-width: 30rem) {
    .download-row a {
        padding: 0.75rem 0.25rem;
    }

    .file-title {
        font-size: 0.95rem;
    }
}
```

- [ ] **Step 2: Verify file exists**

```bash
ls -l /Users/pedrobraganca/Projectos/sulimet/css/downloads.css
```

Expected: file exists, non-zero size.

- [ ] **Step 3: Commit**

```bash
cd /Users/pedrobraganca/Projectos/sulimet
git add css/downloads.css
git commit -m "$(cat <<'EOF'
Add downloads.css page stylesheet

Brand-gradient hero strip, sectioned file-list layout, row hover
transitions, and responsive stacking at 48rem/30rem breakpoints.
Reuses design tokens from styles.css.

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>
EOF
)"
```

---

## Task 4: Create js/downloads.js

**Files:**
- Create: `js/downloads.js`

- [ ] **Step 1: Create the file with full contents**

Write exactly this to `/Users/pedrobraganca/Projectos/sulimet/js/downloads.js`:

```js
// ===== Downloads Page JavaScript =====

document.addEventListener('DOMContentLoaded', () => {
    // Fade-in on scroll with staggered delay
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });

    // Apply stored language on load (switchLanguage is defined in translations.js)
    const storedLang = localStorage.getItem('sulimet-lang') || 'en';
    if (typeof switchLanguage === 'function') {
        switchLanguage(storedLang);
    }
});
```

- [ ] **Step 2: Verify JS parses**

```bash
node --check /Users/pedrobraganca/Projectos/sulimet/js/downloads.js && echo OK
```

Expected: `OK`.

- [ ] **Step 3: Commit**

```bash
cd /Users/pedrobraganca/Projectos/sulimet
git add js/downloads.js
git commit -m "$(cat <<'EOF'
Add downloads.js page script

Staggered fade-in IntersectionObserver (100ms per element) and
applies persisted language on load. Tiny file — no carousel/form/
counters needed for this page.

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>
EOF
)"
```

---

## Task 5: Create downloads.html

**Files:**
- Create: `downloads.html`

- [ ] **Step 1: Create the file with full contents**

Write exactly this to `/Users/pedrobraganca/Projectos/sulimet/downloads.html` (note that `<meta>` is a void element — never write `</meta>`):

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">

    <!-- SEO Meta Tags -->
    <meta name="description" content="Download Sulimet's quality certifications, IATF 16949 and ISO 9001 certificates, and PRR project documentation.">
    <meta name="keywords" content="Sulimet, downloads, certifications, ISO 9001, IATF 16949, PRR, quality certificates">
    <meta name="author" content="Sulimet Group">
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="https://www.sulimet.com/downloads.html">

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://www.sulimet.com/downloads.html">
    <meta property="og:title" content="Downloads | Sulimet Group">
    <meta property="og:description" content="Download Sulimet's quality certifications and PRR project documentation.">
    <meta property="og:image" content="https://www.sulimet.com/assets/images/sulimet-logo.png">
    <meta property="og:locale" content="en_US">
    <meta property="og:locale:alternate" content="pt_PT">

    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:url" content="https://www.sulimet.com/downloads.html">
    <meta name="twitter:title" content="Downloads | Sulimet Group">
    <meta name="twitter:description" content="Download Sulimet's quality certifications and PRR project documentation.">
    <meta name="twitter:image" content="https://www.sulimet.com/assets/images/sulimet-logo.png">

    <!-- Hreflang for multilingual SEO -->
    <link rel="alternate" hreflang="en" href="https://www.sulimet.com/downloads.html">
    <link rel="alternate" hreflang="pt" href="https://www.sulimet.com/downloads.html?lang=pt">
    <link rel="alternate" hreflang="x-default" href="https://www.sulimet.com/downloads.html">

    <title>Downloads | Sulimet Group</title>
    <link rel="icon" type="image/png" href="assets/images/sulimet-logo.png">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/styles.css">
    <link rel="stylesheet" href="css/downloads.css">

    <!-- Structured Data / JSON-LD -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.sulimet.com/"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Downloads",
                "item": "https://www.sulimet.com/downloads.html"
            }
        ]
    }
    </script>
</head>
<body>
    <!-- Header -->
    <header class="header" id="header">
        <div class="container">
            <a href="index.html" class="logo" aria-label="Sulimet Home">
                <img src="assets/images/sulimet-icon.png" alt="Sulimet Logo" width="40" height="40">
            </a>
            <div class="header-right">
                <nav class="nav" id="nav" aria-label="Main navigation">
                    <ul class="nav-list">
                        <li><a href="index.html#about" class="nav-link" data-i18n="nav.about">About Us</a></li>
                        <li><a href="index.html#contact" class="nav-link" data-i18n="nav.contact">Contacts</a></li>
                    </ul>
                </nav>
                <div class="lang-toggle" aria-label="Language selector">
                    <button class="lang-btn" data-lang="en" onclick="switchLanguage('en')">EN</button>
                    <span class="lang-divider">|</span>
                    <button class="lang-btn" data-lang="pt" onclick="switchLanguage('pt')">PT</button>
                </div>
            </div>
            <button class="nav-toggle" id="nav-toggle" aria-label="Toggle navigation" aria-expanded="false">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    </header>

    <main>
        <!-- Page hero strip -->
        <section class="downloads-hero">
            <div class="container">
                <h1 data-i18n="downloads.title">Downloads</h1>
                <p class="downloads-tagline" data-i18n="downloads.tagline">Precision in every detail</p>
            </div>
        </section>

        <!-- Metalworking section -->
        <section class="downloads-section" id="metalworking">
            <div class="container">
                <h2 class="body-title" data-i18n="downloads.section.metalworking">Metalworking</h2>
                <hr class="section-divider">
                <ul class="download-list">
                    <li class="download-row fade-in">
                        <a href="assets/downloads/00034858-qms-engus-ukas.pdf" target="_blank" rel="noopener" download>
                            <span class="file-prefix" data-i18n="downloads.prefix">Downloads</span>
                            <span class="file-sep" aria-hidden="true">|</span>
                            <span class="file-title" data-i18n="downloads.files.iso9001_en">ISO 9001 Certificate (EN)</span>
                        </a>
                    </li>
                    <li class="download-row fade-in">
                        <a href="assets/downloads/00034858-qms-porpt-ukas.pdf" target="_blank" rel="noopener" download>
                            <span class="file-prefix" data-i18n="downloads.prefix">Downloads</span>
                            <span class="file-sep" aria-hidden="true">|</span>
                            <span class="file-title" data-i18n="downloads.files.iso9001_pt">ISO 9001 Certificate (PT)</span>
                        </a>
                    </li>
                </ul>
            </div>
        </section>

        <!-- Electrical Systems section -->
        <section class="downloads-section bg-light" id="electrical-systems">
            <div class="container">
                <h2 class="body-title" data-i18n="downloads.section.electrical">Electrical Systems</h2>
                <hr class="section-divider">
                <ul class="download-list">
                    <li class="download-row fade-in">
                        <a href="assets/downloads/certificado-ga-2026-0009.pdf" target="_blank" rel="noopener" download>
                            <span class="file-prefix" data-i18n="downloads.prefix">Downloads</span>
                            <span class="file-sep" aria-hidden="true">|</span>
                            <span class="file-title" data-i18n="downloads.files.quality_env">Quality &amp; Environmental Certificate</span>
                        </a>
                    </li>
                    <li class="download-row fade-in">
                        <a href="assets/downloads/00042307-qms-engus-ukas.pdf" target="_blank" rel="noopener" download>
                            <span class="file-prefix" data-i18n="downloads.prefix">Downloads</span>
                            <span class="file-sep" aria-hidden="true">|</span>
                            <span class="file-title" data-i18n="downloads.files.iso9001_elec_1">ISO 9001 Certificate</span>
                        </a>
                    </li>
                    <li class="download-row fade-in">
                        <a href="assets/downloads/00042306-iatf-16949.pdf" target="_blank" rel="noopener" download>
                            <span class="file-prefix" data-i18n="downloads.prefix">Downloads</span>
                            <span class="file-sep" aria-hidden="true">|</span>
                            <span class="file-title" data-i18n="downloads.files.iatf16949_1">IATF 16949 Certificate</span>
                        </a>
                    </li>
                    <li class="download-row fade-in">
                        <a href="assets/downloads/0030260-qms-engus-ukas.pdf" target="_blank" rel="noopener" download>
                            <span class="file-prefix" data-i18n="downloads.prefix">Downloads</span>
                            <span class="file-sep" aria-hidden="true">|</span>
                            <span class="file-title" data-i18n="downloads.files.iso9001_elec_2">ISO 9001 Certificate (2)</span>
                        </a>
                    </li>
                    <li class="download-row fade-in">
                        <a href="assets/downloads/0030401-iatf-16949.pdf" target="_blank" rel="noopener" download>
                            <span class="file-prefix" data-i18n="downloads.prefix">Downloads</span>
                            <span class="file-sep" aria-hidden="true">|</span>
                            <span class="file-title" data-i18n="downloads.files.iatf16949_2">IATF 16949 Certificate (2)</span>
                        </a>
                    </li>
                </ul>
            </div>
        </section>

        <!-- PRR section -->
        <section class="downloads-section" id="prr">
            <div class="container">
                <h2 class="body-title" data-i18n="downloads.section.prr">PRR</h2>
                <hr class="section-divider">
                <ul class="download-list">
                    <li class="download-row fade-in">
                        <a href="assets/financiamentos.pdf" target="_blank" rel="noopener" download>
                            <span class="file-prefix" data-i18n="downloads.prefix">Downloads</span>
                            <span class="file-sep" aria-hidden="true">|</span>
                            <span class="file-title" data-i18n="downloads.files.prr_datasheet">PRR Project Technical Datasheet</span>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    </main>

    <!-- Footer -->
    <footer class="footer-metalworking">
        <div class="container">
            <div class="footer-columns">
                <div class="footer-column">
                    <h4 data-i18n="footer.about.title">About</h4>
                    <ul>
                        <li><a href="index.html#about" data-i18n="footer.about.about">About Us</a></li>
                        <li><a href="index.html#services" data-i18n="footer.about.history">Our History</a></li>
                        <li><a href="index.html#global" data-i18n="footer.about.kpis">Manufacturing KPIs</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h4 data-i18n="footer.metalworking.title">Metalworking</h4>
                    <ul>
                        <li><a href="metalworking.html#hero" data-i18n="footer.metalworking.industries">Industries</a></li>
                        <li><a href="metalworking.html#capabilities" data-i18n="footer.metalworking.capabilities">Capabilities</a></li>
                        <li><a href="metalworking.html#materials" data-i18n="footer.metalworking.materials">Materials</a></li>
                        <li><a href="metalworking.html#contacts" data-i18n="footer.metalworking.contact">Contact us</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h4 data-i18n="footer.electrical.title">Electrical Systems</h4>
                    <ul>
                        <li><a href="electrical-systems.html#hero" data-i18n="footer.electrical.about">About us</a></li>
                        <li><a href="electrical-systems.html#capabilities" data-i18n="footer.electrical.capabilities">Capabilities</a></li>
                        <li><a href="electrical-systems.html#technologies" data-i18n="footer.electrical.technologies">Manufacturing Technologies</a></li>
                        <li><a href="electrical-systems.html#contacts" data-i18n="footer.electrical.contact">Contact us</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h4 data-i18n="footer.info.title">Info</h4>
                    <ul>
                        <li><a href="#" data-i18n="footer.info.privacy">Privacy Policy</a></li>
                        <li><a href="assets/financiamentos.pdf" target="_blank" rel="noopener noreferrer" data-i18n="footer.info.prr">PRR</a></li>
                        <li><a href="index.html#contact" data-i18n="footer.info.contact">Contact us</a></li>
                        <li><a href="#" data-i18n="footer.info.downloads">Downloads</a></li>
                    </ul>
                    <div class="footer-social">
                        <a href="https://www.facebook.com/sulimetlda" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                        </a>
                        <a href="https://www.instagram.com/sulimetlda/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                        </a>
                        <a href="https://pt.linkedin.com/company/sulimet" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                        </a>
                    </div>
                </div>
            </div>
            <!-- Certification Logos -->
            <div class="footer-certifications">
                <img src="assets/images/cert-iso-9001.png" alt="ISO 9001 Certification" onerror="this.style.display='none'">
                <img src="assets/images/cert-iso-14001.png" alt="ISO 14001 Certification" onerror="this.style.display='none'">
                <img src="assets/images/cert-compete.png" alt="Compete 2030" onerror="this.style.display='none'">
                <img src="assets/images/cert-sme.png" alt="SME Certification" onerror="this.style.display='none'">
                <img src="assets/images/cert-eu.png" alt="EU Funding" onerror="this.style.display='none'">
                <img src="assets/images/cert-prr.png" alt="PRR Portugal" onerror="this.style.display='none'">
                <img src="assets/images/cert-portugal.png" alt="República Portuguesa" onerror="this.style.display='none'">
                <img src="assets/images/cert-eu-fund.png" alt="EU Regional Fund" onerror="this.style.display='none'">
            </div>
            <div class="funding-bar">
                <a href="assets/financiamentos.pdf" target="_blank" rel="noopener noreferrer">
                    <img src="assets/images/barra-logos.png" alt="PRR - Plano de Recuperação e Resiliência, República Portuguesa, Financiado pela União Europeia NextGenerationEU">
                </a>
            </div>
        </div>
    </footer>

    <script src="js/translations.js"></script>
    <script src="js/downloads.js"></script>
</body>
</html>
```

- [ ] **Step 2: Validate HTML structure**

```bash
# Check there are exactly 8 download links pointing at the expected paths
grep -oE 'href="assets/(downloads|financiamentos)[^"]*"' /Users/pedrobraganca/Projectos/sulimet/downloads.html | sort -u
```

Expected (exact 8 unique lines):

```
href="assets/downloads/00034858-qms-engus-ukas.pdf"
href="assets/downloads/00034858-qms-porpt-ukas.pdf"
href="assets/downloads/00042306-iatf-16949.pdf"
href="assets/downloads/00042307-qms-engus-ukas.pdf"
href="assets/downloads/0030260-qms-engus-ukas.pdf"
href="assets/downloads/0030401-iatf-16949.pdf"
href="assets/downloads/certificado-ga-2026-0009.pdf"
href="assets/financiamentos.pdf"
```

(The file contains `href="assets/financiamentos.pdf"` twice — once in the PRR download row and once in the footer funding-bar — so without `-u` there would be 9 lines.)

Run a second check:

```bash
grep -c 'class="download-row fade-in"' /Users/pedrobraganca/Projectos/sulimet/downloads.html
```

Expected: `8`.

Third check — confirm no invalid `</meta>` close tags:

```bash
grep -n '</meta>' /Users/pedrobraganca/Projectos/sulimet/downloads.html
```

Expected: no output.

- [ ] **Step 3: Confirm all script tags and script load order**

```bash
grep -n '<script' /Users/pedrobraganca/Projectos/sulimet/downloads.html
```

Expected: JSON-LD script tag near top, then `translations.js` before `downloads.js` near the bottom.

- [ ] **Step 4: Commit**

```bash
cd /Users/pedrobraganca/Projectos/sulimet
git add downloads.html
git commit -m "$(cat <<'EOF'
Add downloads.html page

Three stacked sections (Metalworking, Electrical Systems, PRR) with
8 plain-link rows. Header, footer, and SEO metadata mirror existing
page patterns. JSON-LD BreadcrumbList for the Downloads node.

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>
EOF
)"
```

---

## Task 6: Add sitemap entry

**Files:**
- Modify: `sitemap.xml`

- [ ] **Step 1: Open the current sitemap**

```bash
cat /Users/pedrobraganca/Projectos/sulimet/sitemap.xml
```

Expected: XML with two `<url>` blocks (root + metalworking) and a closing `</urlset>`. Note: current sitemap lacks an entry for `electrical-systems.html` — out of scope for this plan; do not add it.

- [ ] **Step 2: Insert the downloads URL block before `</urlset>`**

In `/Users/pedrobraganca/Projectos/sulimet/sitemap.xml`, replace:

```xml
  <url>
    <loc>https://www.sulimet.com/metalworking.html</loc>
    <lastmod>2026-01-29</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
    <xhtml:link rel="alternate" hreflang="en" href="https://www.sulimet.com/metalworking.html" />
    <xhtml:link rel="alternate" hreflang="pt" href="https://www.sulimet.com/metalworking.html?lang=pt" />
  </url>
</urlset>
```

with:

```xml
  <url>
    <loc>https://www.sulimet.com/metalworking.html</loc>
    <lastmod>2026-01-29</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
    <xhtml:link rel="alternate" hreflang="en" href="https://www.sulimet.com/metalworking.html" />
    <xhtml:link rel="alternate" hreflang="pt" href="https://www.sulimet.com/metalworking.html?lang=pt" />
  </url>
  <url>
    <loc>https://www.sulimet.com/downloads.html</loc>
    <lastmod>2026-04-21</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
    <xhtml:link rel="alternate" hreflang="en" href="https://www.sulimet.com/downloads.html" />
    <xhtml:link rel="alternate" hreflang="pt" href="https://www.sulimet.com/downloads.html?lang=pt" />
  </url>
</urlset>
```

- [ ] **Step 3: Validate XML**

```bash
xmllint --noout /Users/pedrobraganca/Projectos/sulimet/sitemap.xml && echo "XML OK"
```

Expected: `XML OK`. (macOS ships `xmllint` by default.)

- [ ] **Step 4: Commit**

```bash
cd /Users/pedrobraganca/Projectos/sulimet
git add sitemap.xml
git commit -m "$(cat <<'EOF'
Add sitemap entry for downloads page

lastmod 2026-04-21, priority 0.5, monthly changefreq, with EN/PT
hreflang alternates matching the pattern used by other URL entries.

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>
EOF
)"
```

---

## Task 7: Manual browser verification

No automated tests exist. Verify in a browser.

- [ ] **Step 1: Start local server**

```bash
cd /Users/pedrobraganca/Projectos/sulimet
npx serve . --no-clipboard
```

Note the port it prints (usually 3000).

- [ ] **Step 2: Visit the downloads page**

Open `http://localhost:3000/downloads.html` in a browser.

Expected:
- Red gradient hero strip with "DOWNLOADS" title and tagline.
- Three sections stacked: Metalworking (2 rows), Electrical Systems (5 rows, light background), PRR (1 row).
- Each row: grey "DOWNLOADS" prefix, `|` separator, dark grey title.
- Fade-in animation plays as you scroll (staggered per row).

- [ ] **Step 3: Click every download link (8 total)**

Verify each of the 8 links either opens the PDF in a new tab or prompts download:
- Metalworking (2): ISO 9001 EN, ISO 9001 PT
- Electrical Systems (5): Quality & Environmental, ISO 9001, IATF 16949, ISO 9001 (2), IATF 16949 (2)
- PRR (1): PRR Project Technical Datasheet

Expected: no 404s. Each PDF opens or downloads.

- [ ] **Step 4: Toggle language**

Click `PT` in the header. All 8 titles, 3 section headings, prefix, and tagline swap to Portuguese. Click `EN` — swap back. Refresh — persisted language remains.

Run in browser devtools console:

```js
localStorage.getItem('sulimet-lang')
```

Expected: `'pt'` or `'en'` depending on last toggle.

- [ ] **Step 5: Responsive check — mobile 375px**

Open devtools, set viewport to 375px.

Expected:
- Hero title scales down.
- File rows stack: prefix label sits above title (no `|` visible).
- No horizontal scroll.
- Section heading shrinks to ~2rem.

- [ ] **Step 6: Responsive check — desktop 1440px**

Set viewport to 1440px.

Expected:
- Centered container, alternating backgrounds visible.
- Rows are single-line with prefix + `|` + title.

- [ ] **Step 7: Keyboard navigation**

Press Tab repeatedly starting from the top of the page.

Expected:
- Focus goes: logo → About Us → Contacts → EN → PT → each of the 8 download rows → footer links.
- Each download row shows a 2px red outline on focus.
- Pressing Enter on a focused row opens/downloads the PDF.

- [ ] **Step 8: Regression check — PRR links on other pages still work**

Visit `http://localhost:3000/index.html`, scroll to footer, click the "PRR" link. Expected: opens `assets/financiamentos.pdf`.

Repeat on `metalworking.html` and `electrical-systems.html`.

- [ ] **Step 9: View source — SEO/meta sanity check**

Right-click page → View source. Verify `<head>` contains:
- `<title>Downloads | Sulimet Group</title>`
- `<meta name="description" content="Download Sulimet's ...">`
- `<link rel="canonical" href="https://www.sulimet.com/downloads.html">`
- 3 `<link rel="alternate" hreflang="...">` tags
- OG tags: `og:type`, `og:url`, `og:title`, `og:description`, `og:image`, `og:locale`, `og:locale:alternate`
- Twitter tags
- JSON-LD BreadcrumbList

- [ ] **Step 10: Stop the local server**

Ctrl-C in the terminal where `npx serve` is running.

---

## Task 8: Final review and push

- [ ] **Step 1: Review all commits**

```bash
cd /Users/pedrobraganca/Projectos/sulimet
git log --oneline -10
```

Expected: 6 new commits on top of `main` (PDFs, translations, CSS, JS, HTML, sitemap). Plus the spec commit from earlier.

- [ ] **Step 2: Verify final repo state**

```bash
git status
```

Expected: working tree clean (all changes committed).

- [ ] **Step 3: Run a final file-existence check**

```bash
ls -1 /Users/pedrobraganca/Projectos/sulimet/downloads.html \
      /Users/pedrobraganca/Projectos/sulimet/css/downloads.css \
      /Users/pedrobraganca/Projectos/sulimet/js/downloads.js \
      /Users/pedrobraganca/Projectos/sulimet/assets/downloads/
```

Expected: all files/dir exist.

- [ ] **Step 4: Offer to push**

Do NOT push automatically. Ask the user:

> "Implementation complete. All 8 tasks done, 6 commits on local `main`. Ready to push to origin? I recommend running the browser verification steps once more before push."

If user says yes:

```bash
cd /Users/pedrobraganca/Projectos/sulimet
git push origin main
```

If GitHub Pages is enabled on this repo (it is, per CLAUDE.md), the deploy workflow will kick in.

---

## Risks & Open Items

**Risks:**
- **File-to-section mapping** was based on filename pattern guessing by the AI, user-approved during brainstorming. If any cert's actual content is for the wrong business unit (e.g., a metalworking cert ended up in electrical), the labels misrepresent. Mitigation: user reviews each link post-deploy.
- **`(2)` suffix placeholder** — titles `ISO 9001 Certificate (2)` and `IATF 16949 Certificate (2)` are disambiguation placeholders. User to update i18n values with real distinction (e.g., "Morocco site") post-launch.
- **"PRR Project Technical Datasheet"** — borrowed from sisma.pt pattern. The actual `financiamentos.pdf` may be broader scoped. User can rename the i18n value any time without touching HTML.

**Out of scope (spec non-goals):**
- No search/filter.
- No file-size / last-updated metadata shown.
- No download analytics.
- No addition of `electrical-systems.html` to `sitemap.xml` (pre-existing omission).

**Follow-up (optional, user discretion):**
- Update `(2)` titles once user confirms real distinction.
- Consider adding `electrical-systems.html` to sitemap in a separate change.
- Wire the three existing footer Downloads stubs (`href="#"` in index/metalworking/electrical-systems) to `downloads.html`. Currently left as-is per spec's "no cross-links" non-goal; can be reversed with a 3-line edit if discoverability becomes a concern.
