# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Sulimet is a static corporate website for an industrial solutions company (metalurgy/machining). Built with vanilla HTML, CSS, and JavaScript—no build tools, bundlers, or package managers.

**Two Pages:**
- `index.html` - Main homepage with hero, about, services/history timeline, global presence, contact
- `metalworking.html` - Dedicated metalworking services page with capabilities, certifications, materials

## Development

To run the site locally, open `index.html` in a browser or use any static file server:
```bash
npx serve .
# or
python -m http.server 8000
```

## Architecture

**File Structure:**
- `index.html` - Main homepage (single-page layout with anchor navigation)
- `metalworking.html` - Metalworking services detail page
- `css/styles.css` - Shared base styles, CSS variables, responsive breakpoints (1024px, 768px, 480px)
- `css/metalworking.css` - Metalworking page-specific styles
- `js/translations.js` - i18n system with EN/PT translations (must load first)
- `js/main.js` - Shared interactivity (carousel, animations, form, notifications)
- `js/metalworking.js` - Metalworking page-specific scripts (category tabs, fade-ins)
- `assets/images/` - Images and videos (includes dual hero background videos)
- `assets/fonts/` - Custom Microgramma font

**CSS Architecture:**
- CSS variables defined in `:root` in `styles.css` for colors, fonts, transitions
- Primary brand gradient: `linear-gradient(90deg, #CF132B 0%, #7B0B1A 100%)`
- Sections alternate between `--bg-light` (#f8f9fa) and white backgrounds
- Cards use consistent `var(--shadow)` and `var(--shadow-hover)` effects
- Responsive breakpoints: 1024px (tablets), 768px (mobile landscape), 480px (mobile portrait)
- Uses rem units for scalability (base 16px)

**i18n System (Critical):**
- Uses `data-i18n` attributes on HTML elements (e.g., `data-i18n="nav.about"`)
- Translations defined in `js/translations.js` as nested key-value pairs (translations.en, translations.pt)
- `switchLanguage(lang)` function updates all elements and persists to localStorage
- For inputs/textareas, updates `placeholder`; for other elements, updates `innerHTML`
- Helper function `t(key)` returns translated string for use in JS (e.g., notifications)
- Language preference stored as 'sulimet-lang' in localStorage
- **When adding new translatable content, ALWAYS add both EN and PT translations to translations.js**

**JavaScript Architecture:**
- No modules/bundlers - scripts loaded in order: translations.js → main.js → page-specific JS
- Header scroll effect (adds `.scrolled` class at 100px scroll)
- History carousel with touch/swipe support and responsive items-per-view (fixed at 3)
- Animated stat counters using IntersectionObserver (2s duration with easing)
- Fade-in animations using `.fade-in` / `.visible` classes with IntersectionObserver
- Contact form with client-side validation (simulated submission, no backend)
- Toast notification system via `showNotification(message, type)` function
- Smooth scroll for anchor links with 80px header offset
- Parallax effect on hero background videos

**Metalworking Page Specifics:**
- Category tabs (Automatical, Alternativer, Industrial) with active state management
- Separate footer with certification logos and different layout
- Service split sections with `.reverse` class for alternating image/text layouts
- Materials grid with 5 columns of technical specifications

## Adding New Content

**Adding Translatable Text:**
1. Add HTML element with `data-i18n="key.path"` attribute
2. Add both EN and PT translations to `js/translations.js` under translations.en and translations.pt
3. Use nested key structure (e.g., "section.subsection.item")

**Adding New Sections:**
- Follow alternating background pattern (`.bg-light` vs white)
- Use standard section structure: `.container` → `.section-title` + content
- Add `.fade-in` class for animation on scroll

**Carousel/Carousel Modifications:**
- Carousel logic in `main.js` uses fixed 3-item view regardless of screen size
- Dot navigation auto-generated based on totalServiceSlides calculation
- Touch/swipe threshold set to 50px
