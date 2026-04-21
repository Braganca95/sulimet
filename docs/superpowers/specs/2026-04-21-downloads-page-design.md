# Downloads Page — Design Spec

**Date:** 2026-04-21
**Project:** sulimet (static corporate site)
**Scope:** new standalone `downloads.html` page listing downloadable PDFs in three sections (Metalworking, Electrical Systems, PRR), organization modeled on [sisma.pt/downloads/](https://sisma.pt/downloads/).

## Goal

Add a public page that lets visitors download Sulimet's certification PDFs and PRR project documentation. Plain text link list per section (no cards, no metadata), bilingual (EN/PT), matching the existing Sulimet visual language.

## Non-goals

- No links from other pages' header or footer (intentional — direct URL only).
- No search, filter, sorting, file-size display, or "last updated" metadata.
- No analytics / download tracking.
- No backend, no CMS.

## Files to deliver

| Path | Kind | Notes |
|---|---|---|
| `downloads.html` | new | Page markup. |
| `css/downloads.css` | new | Extends `css/styles.css`. |
| `js/downloads.js` | new | Fade-in observer + language toggle wiring only. |
| `js/translations.js` | modify | Add `downloads.*` keys to `translations.en` and `translations.pt`. |
| `assets/downloads/` | new dir | Copy 7 cert PDFs from `~/Downloads/`. |
| `sitemap.xml` | modify | Add `<url>` entry for `downloads.html` (EN + PT hreflang). |

`assets/financiamentos.pdf` stays where it is (already referenced by index, metalworking, and electrical-systems pages).

## Page structure

1. Shared site header with logo + language toggle. **No main nav links** (kept minimal; page is not cross-linked from existing pages).
2. Compact hero strip (~18rem tall): brand gradient `linear-gradient(90deg, #CF132B 0%, #7B0B1A 100%)`, title `DOWNLOADS` in Microgramma, tagline in Montserrat.
3. **Metalworking** section — 2 files.
4. **Electrical Systems** section — 5 files.
5. **PRR** section — 1 file.
6. Shared footer (copy the metalworking-page footer layout).

Sections alternate white / `--bg-light` backgrounds per site convention.

## File inventory & labels

PDFs copied from `~/Downloads/` to `assets/downloads/`, renamed to lowercase `.pdf` for URL consistency.

| Section | Source filename (~/Downloads) | Target path | EN title | PT title |
|---|---|---|---|---|
| Metalworking | `00034858-QMS-ENGUS-UKAS.PDF` | `assets/downloads/00034858-qms-engus-ukas.pdf` | ISO 9001 Certificate (EN) | Certificado ISO 9001 (EN) |
| Metalworking | `00034858-QMS-PORPT-UKAS.PDF` | `assets/downloads/00034858-qms-porpt-ukas.pdf` | ISO 9001 Certificate (PT) | Certificado ISO 9001 (PT) |
| Electrical Systems | `CertificadoGA-2026-0009_IN_2026-01-19.pdf` | `assets/downloads/certificado-ga-2026-0009.pdf` | Quality & Environmental Certificate | Certificado de Qualidade e Ambiente |
| Electrical Systems | `00042307-QMS-ENGUS-UKAS.PDF` | `assets/downloads/00042307-qms-engus-ukas.pdf` | ISO 9001 Certificate | Certificado ISO 9001 |
| Electrical Systems | `00042306-001-16949-ENGUS-IATF.PDF` | `assets/downloads/00042306-iatf-16949.pdf` | IATF 16949 Certificate | Certificado IATF 16949 |
| Electrical Systems | `0030260-QMS-ENGUS-UKAS.PDF` | `assets/downloads/0030260-qms-engus-ukas.pdf` | ISO 9001 Certificate (2) | Certificado ISO 9001 (2) |
| Electrical Systems | `0030401-001-16949-ENGUS-IATF.PDF` | `assets/downloads/0030401-iatf-16949.pdf` | IATF 16949 Certificate (2) | Certificado IATF 16949 (2) |
| PRR | *(existing)* `assets/financiamentos.pdf` | `assets/financiamentos.pdf` | PRR Project Technical Datasheet | Ficha Técnica do Projeto PRR |

**Note on "(2)" suffixes:** placeholder to disambiguate duplicate cert types. Actual distinction (different entity, different standard version, Morocco site) to be updated by the user post-launch — not blocking.

Total page weight: ~3.7 MB (8 PDFs). No GitHub Release hosting needed.

## Row markup

Each file is a single `<a>` wrapping three spans: prefix, separator, title. Whole row is the click target. Opens in a new tab; download attribute set.

```html
<li class="download-row fade-in">
  <a href="assets/downloads/00042307-qms-engus-ukas.pdf" target="_blank" rel="noopener" download>
    <span class="file-prefix" data-i18n="downloads.prefix">Downloads</span>
    <span class="file-sep" aria-hidden="true">|</span>
    <span class="file-title" data-i18n="downloads.files.iso9001_elec_1">ISO 9001 Certificate</span>
  </a>
</li>
```

## Styling

New `css/downloads.css` extends `css/styles.css`. Design tokens (`--bg-light`, `--font-display`, brand gradient, `#3f3a34` body text, `#CF132B` brand red) reused unchanged.

**Hero strip:**
- Height ~18rem (`clamp(14rem, 22vw, 20rem)`).
- Background brand gradient, centered title + tagline, white text.
- Title Microgramma uppercase `clamp(2.5rem, 5vw, 4rem)`; tagline Montserrat 1.125rem, `rgba(255,255,255,0.85)`.

**Section blocks:**
- Standard `.container` max-width (not edge-to-edge like metalworking).
- `h2.body-title` style (red, 3.125rem, Microgramma).
- 2px × 4rem red divider under heading.
- `<ul class="download-list">` with `list-style: none` and zero padding.

**File rows:**
- Flex row, `align-items: center`, `gap: 0.75rem`, `padding: 1rem 0`.
- Bottom border `1px solid rgba(0,0,0,0.08)` (none on last row).
- `.file-prefix` — `#6b6b6b`, `text-transform: uppercase`, `letter-spacing: 0.08em`, `font-size: 0.75rem`.
- `.file-sep` — `#c6c6c6`.
- `.file-title` — `#3f3a34`, `font-weight: 500`, `font-size: 1.0625rem`.
- Hover: title color transitions to `#CF132B`; row background `rgba(207,19,43,0.03)`.
- Focus-visible: 2px red outline, 2px offset (keyboard accessibility).

**Responsive breakpoints** (per CLAUDE.md conventions):
- `<= 48rem` (768px): rows stack — prefix above title. Section heading ~2rem.
- `<= 30rem` (480px): tighter padding (`0.75rem 0`), title `0.95rem`.

## JavaScript

New `js/downloads.js`, loads after `js/translations.js`. Two responsibilities:

1. **Fade-in IntersectionObserver** — copy the staggered pattern from `js/metalworking.js`: add `.visible` class to each `.fade-in` with `index * 100ms` delay, then unobserve.
2. **Language toggle wiring** — attach click handlers to `.lang-btn[data-lang]`, call `switchLanguage(lang)` (defined in `translations.js`).

No carousel, no counters, no form logic.

**Script load order in `downloads.html`:**
```html
<script src="js/translations.js"></script>
<script src="js/downloads.js"></script>
```

## i18n

Add to both `translations.en` and `translations.pt` in `js/translations.js`:

| Key | EN | PT |
|---|---|---|
| `downloads.title` | Downloads | Downloads |
| `downloads.tagline` | Precision in every detail | Precisão em cada detalhe |
| `downloads.prefix` | Downloads | Downloads |
| `downloads.section.metalworking` | Metalworking | Metalomecânica |
| `downloads.section.electrical` | Electrical Systems | Sistemas Elétricos |
| `downloads.section.prr` | PRR | PRR |
| `downloads.files.iso9001_en` | ISO 9001 Certificate (EN) | Certificado ISO 9001 (EN) |
| `downloads.files.iso9001_pt` | ISO 9001 Certificate (PT) | Certificado ISO 9001 (PT) |
| `downloads.files.quality_env` | Quality & Environmental Certificate | Certificado de Qualidade e Ambiente |
| `downloads.files.iso9001_elec_1` | ISO 9001 Certificate | Certificado ISO 9001 |
| `downloads.files.iatf16949_1` | IATF 16949 Certificate | Certificado IATF 16949 |
| `downloads.files.iso9001_elec_2` | ISO 9001 Certificate (2) | Certificado ISO 9001 (2) |
| `downloads.files.iatf16949_2` | IATF 16949 Certificate (2) | Certificado IATF 16949 (2) |
| `downloads.files.prr_datasheet` | PRR Project Technical Datasheet | Ficha Técnica do Projeto PRR |

Page title handled via `<title>` tag + meta description — standard pattern, not through i18n (other pages do the same).

## SEO

In `<head>` of `downloads.html`:
- `<title>Downloads | Sulimet Group</title>`
- Meta description: `Download Sulimet's quality certifications, IATF 16949 and ISO 9001 certificates, and PRR project documentation.`
- Canonical: `https://www.sulimet.com/downloads.html`
- Open Graph + Twitter Card (same structure as metalworking.html).
- Hreflang: `en`, `pt` (`?lang=pt`), `x-default`.
- JSON-LD: `BreadcrumbList` (Home → Downloads). No `Service` schema.

`sitemap.xml`: add one `<url>` entry for `downloads.html` with EN + PT hreflang alternates.

`robots.txt`: no change needed (already allows all).

## Accessibility

- Each `<a>` wraps the whole row so target area is generous.
- `download` attribute hints the browser to download rather than navigate (fallback to open in new tab still works).
- `aria-hidden="true"` on the `|` separator — it's decorative.
- Section headings are real `h2` elements — screen readers can navigate by heading.
- Focus-visible outline matches brand red.
- Color contrast: `#3f3a34` on white = 10.3:1; `#6b6b6b` prefix on white = 5.9:1. Both pass WCAG AA.

## Manual verification checklist

No test suite exists. Browser-test each item:

1. `npx serve .` and open `http://localhost:3000/downloads.html`.
2. Each of the 8 links opens/downloads the correct PDF.
3. Click `PT` language toggle — all titles swap; `localStorage['sulimet-lang']` = `'pt'`; reload preserves language.
4. Mobile viewport 375px — rows stack (prefix above title); no horizontal scroll.
5. Tablet viewport 768px — rows still single-line until breakpoint hits.
6. Desktop 1440px — centered container, correct section alternation.
7. Scroll page — fade-in staggers correctly.
8. Tab through page — focus outlines visible on each row.
9. View source → verify OG/Twitter/canonical/hreflang/JSON-LD all present.
10. `financiamentos.pdf` links on index / metalworking / electrical-systems pages still work (regression check).

## Open items (non-blocking, tracked for follow-up)

1. Real distinction for the "(2)" suffix on duplicate ISO 9001 / IATF 16949 certs — user to provide after launch.
2. Confirm direct-URL-only access is intentional long-term, or add nav/footer link in a later change.
3. Confirm the EN/PT cert mapping for Metalworking (`00034858` pair) is correct — based on filename pattern only.

## Risks

- **Cert file correctness:** file-to-section mapping was approved by user based on filename pattern guessing. If any cert is actually for the wrong business unit, the page will claim the wrong certification scope. Mitigation: user double-checks each PDF after deploy; labels are i18n keys so titles (but not filenames) can be fixed without touching HTML.
- **Wording:** "PRR Project Technical Datasheet" title is borrowed from sisma.pt pattern; the actual `financiamentos.pdf` may be broader scoped (funding statement vs. project datasheet). User can rename the i18n value post-launch.
- **No analytics:** can't measure which downloads are popular. Acceptable — site is currently analytics-free.
