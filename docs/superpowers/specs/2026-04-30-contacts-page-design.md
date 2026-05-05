# Contacts Page — Design Spec

**Status:** Approved (pending user review of this written spec)
**Date:** 2026-04-30
**Scope:** Add a sixth page (`contacts.html`) that aggregates the contact information currently scattered across `metalworking.html#contacts` and `electrical-systems.html#contacts`, presented in the same shell as `downloads.html`.

## Goal

Give visitors a single, canonical page to find every Sulimet contact (Portugal HQ + Morocco subsidiary, for both Metalworking and Electrical Systems business units) without having to dig into the per-product pages.

## Non-goals

- Not removing or restructuring the existing per-page `#contacts` sections — they stay as-is, reachable via in-page anchors when a user is already on `metalworking.html` or `electrical-systems.html`.
- No contact form on the new page. The existing `index.html#contact` form remains as the form entry point and is reachable via direct URL.
- No "general / catch-all" block — `geral@sulimet.com` already appears in all four contact blocks; a separate generic block would be redundant.

## Files

### New

| File | Purpose |
|---|---|
| `contacts.html` | New page. Cloned from `downloads.html` shell (header, hero strip, alternating sections, `footer-metalworking`). |
| `css/contacts.css` | Page-specific. Hero strip + section spacing only. Contact cards reuse classes defined in `css/metalworking.css` (`.contacts-grid`, `.contact-block`, `.sales-contact`, `.contact-details-list`, `.contact-company`, `.contact-address`, `.sales-name`). |
| `js/contacts.js` | Same minimal shape as `js/downloads.js`: `IntersectionObserver` for staggered fade-in + apply stored language on load. |

### Edited

| File | Change |
|---|---|
| `index.html` | (1) Header nav `nav.contact` link `index.html#contact` → `contacts.html`. (2) Footer Info column `footer.info.contact` link `mailto:geral@sulimet.com` → `contacts.html`. |
| `metalworking.html` | (1) Header nav `nav.contact` link → `contacts.html`. (2) Footer Info column `footer.info.contact` link `#contacts` → `contacts.html`. **Untouched:** the `footer.metalworking.contact` link (`#contacts`) and the `footer.electrical.contact` link (`electrical-systems.html#contacts`) — both still resolve. |
| `electrical-systems.html` | (1) Header nav `nav.contact` link → `contacts.html`. (2) Footer Info column `footer.info.contact` link `#contacts` → `contacts.html`. **Untouched:** `footer.metalworking.contact` (`metalworking.html#contacts`) and `footer.electrical.contact` (`#contacts`). |
| `downloads.html` | (1) Header nav `nav.contact` link `index.html#contact` → `contacts.html`. (2) Footer Info column `footer.info.contact` link `index.html#contact` → `contacts.html`. **Untouched:** `footer.metalworking.contact` and `footer.electrical.contact`. |
| `privacy-policy.html` | (1) Header nav `nav.contact` link `index.html#contact` → `contacts.html`. (2) Footer Info column `footer.info.contact` link `index.html#contact` → `contacts.html`. **Untouched:** `footer.metalworking.contact` and `footer.electrical.contact`. |
| `js/translations.js` | Add new EN + PT keys (see "i18n keys" below). |
| `sitemap.xml` | Add `<url>` entry for `https://www.sulimet.com/contacts.html` (priority `0.7`, changefreq `monthly`). Also add the missing `<url>` entry for `https://www.sulimet.com/electrical-systems.html` (priority `0.8`, changefreq `monthly`) — pre-existing gap. |
| `CLAUDE.md` | Bump page count from five to six in Project Overview; add `js/contacts.js` to Script Load Order; add `css/contacts.css` to CSS Architecture. |

## Page Structure

```
<header>                                    (cloned verbatim from downloads.html)
<main>
  <section.contacts-hero>                   (parallels .downloads-hero)
     h1[data-i18n="contacts.title"]:        Contacts / Contactos
     p.contacts-tagline
        [data-i18n="contacts.tagline"]:     Talk to us. / Fale connosco.

  <section.contacts-section #metalworking>  (no bg-light)
     h2.body-title
        [data-i18n="contacts.section.metalworking"]: Metalworking / Metalomecânica
     <hr.section-divider>
     <div.contacts-grid>
        <div.contact-block>  Sulimet, Lda          (PT) — see "Card content" below
        <div.contact-block>  Sulimet Maroc, Sarl   (MA)

  <section.contacts-section.bg-light #electrical-systems>
     h2.body-title
        [data-i18n="contacts.section.electrical"]: Electrical Systems / Sistemas Elétricos
     <hr.section-divider>
     <div.contacts-grid>
        <div.contact-block>  Sulimet Wiring Harness (PT)
        <div.contact-block>  Sulimet Câblage         (MA)
</main>
<footer.footer-metalworking>                (cloned verbatim from downloads.html)
```

## Card content (per `.contact-block`)

Each block mirrors the markup found in `metalworking.html` lines 471–499 / `electrical-systems.html` lines 334–362.

```
<div class="contact-block">
  <h3 class="contact-company" data-i18n="<key>.company">Company name</h3>
  <div class="contact-details-list">
    <p><a href="mailto:geral@sulimet.com">geral@sulimet.com</a></p>
    <p><a href="tel:<E.164>"><display number></a></p>
    <p class="contact-address" data-i18n="<key>.address">Street, city, region, country, ZIP</p>
  </div>
  <div class="sales-contact">
    <h4 data-i18n="<key>.sales.title">Sales Contact</h4>
    <p class="sales-name" data-i18n="<key>.sales.name">Person Name</p>
    <p><a href="mailto:<rep email>"><rep email></a></p>
    <p><a href="tel:<E.164>"><display number></a></p>
  </div>
</div>
```

The four cards' i18n key namespaces (`<key>` placeholder above) and tel/mailto values are in the next two sections. Concretely:

- Sulimet, Lda card → `<key>` = `metalworking.contacts.portugal`, sales sub-block uses `metalworking.contacts.sales.*`
- Sulimet Maroc card → `<key>` = `metalworking.contacts.morocco`, sales sub-block uses `metalworking.contacts.sales.*`
- Sulimet Wiring Harness card → `<key>` = `electrical.contacts.portugal`, sales sub-block uses `electrical.contacts.sales.*`
- Sulimet Câblage card → `<key>` = `electrical.contacts.morocco`, sales sub-block uses `electrical.contacts.sales.*`

## i18n keys

### Reused (no changes needed in `translations.js`)

These already exist and will be wired up in the new HTML directly:

| Key (EN + PT both already present) | Used by |
|---|---|
| `metalworking.contacts.portugal.company` / `.address` | Sulimet, Lda card |
| `metalworking.contacts.morocco.company` / `.address` | Sulimet Maroc card |
| `metalworking.contacts.sales.title` / `.name` | David Carvalho sub-block (used in both metalworking cards) |
| `electrical.contacts.portugal.company` / `.address` | Sulimet Wiring Harness card |
| `electrical.contacts.morocco.company` / `.address` | Sulimet Câblage card |
| `electrical.contacts.sales.title` / `.name` | António Guedes sub-block (used in both electrical cards) |

### New keys to add to `translations.js`

```
contacts.title
contacts.tagline
contacts.section.metalworking
contacts.section.electrical
```

| Key | EN | PT |
|---|---|---|
| `contacts.title` | `Contacts` | `Contactos` |
| `contacts.tagline` | `Talk to us.` | `Fale connosco.` |
| `contacts.section.metalworking` | `Metalworking` | `Metalomecânica` |
| `contacts.section.electrical` | `Electrical Systems` | `Sistemas Elétricos` |

(`contacts.section.*` are intentionally separate from `downloads.section.*` so wording can drift independently per page.)

## Hard-coded content (not translated — same on EN and PT)

| Field | Value |
|---|---|
| Sulimet, Lda phone | `+351 227 634 196` (`tel:+351227634196`) |
| Sulimet Maroc phone | `+212 039 399 990` (`tel:+212039399990`) |
| Sulimet Wiring Harness phone | `+351 227 634 196` (`tel:+351227634196`) |
| Sulimet Câblage phone | `+212 039 399 990` (`tel:+212039399990`) |
| General email (all blocks) | `geral@sulimet.com` |
| David Carvalho email | `david.carvalho@sulimet.com` |
| David Carvalho direct phone | `+351 227 634 196` (`tel:+351227634196`) |
| António Guedes email | `antonio.guedes@sulimet.com` |
| António Guedes direct phone | `+351 910 579 729` (`tel:+351910579729`) |

## SEO

- Standard `<meta>` set matching downloads/privacy-policy: description, keywords, author, robots, canonical, Open Graph, Twitter Card, hreflang for EN + PT + x-default.
- JSON-LD: `BreadcrumbList` with two list items (Home → Contacts), matching the pattern on `downloads.html` and `privacy-policy.html`.
- Page title: `Contacts | Sulimet Group`.

## CSS scope (`css/contacts.css`)

Minimal — only what `downloads.css` analogously provides. Specifically:

1. `.contacts-hero` — same visual treatment as `.downloads-hero` (whatever colors / sizing `css/downloads.css` defines for it). Implementation copies the `.downloads-hero` ruleset and renames the selector.
2. `.contacts-section` — section padding/spacing (mirrors `.downloads-section`).
3. `.contacts-section .contacts-grid` — confirm the grid renders correctly outside the metalworking-page context. The existing rules in `metalworking.css` are scoped under `.contacts-section` already, so they should apply unchanged. If they don't, override here rather than touching `metalworking.css`.

No new card styling. If anything looks broken when the cards are rendered outside the metalworking page, fix it in `contacts.css` rather than `metalworking.css` to avoid affecting `metalworking.html`.

## JS scope (`js/contacts.js`)

Identical shape to `js/downloads.js` (≈30 lines):

```js
document.addEventListener('DOMContentLoaded', () => {
  // Staggered fade-in observer on .fade-in elements
  // Apply localStorage 'sulimet-lang' via switchLanguage() if defined
});
```

Load order: `js/translations.js` first, then `js/contacts.js`. Page-specific scripts are never loaded together.

## Testing / verification (manual)

1. Serve locally with `npx serve .` and load `http://localhost:3000/contacts.html`.
2. Confirm both sections render with all four contact cards. Verify the `mailto:` and `tel:` links open the right composer / dialer.
3. Toggle EN ↔ PT — confirm the four reused contact blocks already speak both languages and the new `contacts.*` keys flip correctly.
4. Click "Contacts" in the header from each of the five other pages — should land on `contacts.html`.
5. Click "Contact us" in the footer Info column from each of the five other pages — should also land on `contacts.html`.
6. Confirm `metalworking.html#contacts` and `electrical-systems.html#contacts` anchors still work (footer business-unit columns and any other in-page links).
7. Validate `sitemap.xml` (well-formed XML) and confirm both new entries are present.
8. Lighthouse / DevTools mobile preview at the standard breakpoints (1024 / 768 / 480).
```
