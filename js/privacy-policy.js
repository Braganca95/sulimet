// ===== Privacy Policy Page JavaScript =====

document.addEventListener('DOMContentLoaded', () => {
    // Apply stored language on load (switchLanguage is defined in translations.js)
    const storedLang = localStorage.getItem('sulimet-lang') || 'en';
    if (typeof switchLanguage === 'function') {
        switchLanguage(storedLang);
    }
});
