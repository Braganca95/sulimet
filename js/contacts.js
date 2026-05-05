// ===== Contacts Page JavaScript =====

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
