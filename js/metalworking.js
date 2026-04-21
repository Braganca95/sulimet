// ===== Metalworking Page JavaScript =====

document.addEventListener('DOMContentLoaded', () => {
    // Hero image swap on category click
    const stage              = document.querySelector('.hero-annotation-stage');
    const imgFront           = document.getElementById('hero-img-front');
    const imgBack            = document.getElementById('hero-img-back');
    const imgFood            = document.getElementById('hero-img-food');
    const imgIndustrial      = document.getElementById('hero-img-industrial');
    const annotations        = document.getElementById('hero-annotations');
    const annotationsFood    = document.getElementById('hero-annotations-food');
    const annotationsIndustrial = document.getElementById('hero-annotations-industrial');
    const categoryColumns    = document.querySelectorAll('.category-column');

    function setActiveCategory(cat) {
        stage.dataset.active = cat;
        imgFront.classList.toggle('hero-img-active', cat === 'automotive');
        imgBack.classList.remove('hero-img-active');
        imgFood.classList.toggle('hero-img-active', cat === 'food');
        imgIndustrial.classList.toggle('hero-img-active', cat === 'industrial');
        annotations.classList.toggle('hero-annotations-active', cat === 'automotive');
        annotationsFood.classList.toggle('hero-annotations-active', cat === 'food');
        annotationsIndustrial.classList.toggle('hero-annotations-active', cat === 'industrial');

        categoryColumns.forEach(col => {
            const isActive = col.dataset.category === cat;
            col.classList.toggle('active', isActive);
            col.setAttribute('aria-pressed', String(isActive));
        });
    }

    categoryColumns.forEach(col => {
        col.tabIndex = 0;
        col.setAttribute('role', 'button');

        col.addEventListener('click', () => {
            setActiveCategory(col.dataset.category);
        });

        col.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                setActiveCategory(col.dataset.category);
            }
        });
    });

    setActiveCategory('automotive');

    // Hero-showcase video: retry play on load, canplay, tab-return, first gesture.
    // iOS Low Power Mode blocks autoplay silently; desktop Safari/Chrome don't auto-pause
    // muted videos when the tab is hidden so we do it manually to save battery.
    const showcaseVideos = document.querySelectorAll('.hero-showcase video');
    if (showcaseVideos.length) {
        const retryShowcase = () => {
            showcaseVideos.forEach(v => { if (v.paused) v.play().catch(() => {}); });
        };
        window.addEventListener('load', retryShowcase);
        showcaseVideos.forEach(v => v.addEventListener('canplay', retryShowcase));
        ['touchstart', 'click'].forEach(evt => {
            document.addEventListener(evt, retryShowcase, { once: true, passive: true });
        });
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) showcaseVideos.forEach(v => v.pause());
            else retryShowcase();
        });
    }

    // Capability card videos: autoplay when scrolled into view on all devices.
    // Avoid setting currentTime=0 — iOS Safari can stick in a seeking state that never resolves.
    // iOS Safari blocks .play() under Low Power Mode; swallow the promise rejection.
    const capabilityVideoObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const video = entry.target.querySelector('video');
            if (!video) return;
            if (entry.isIntersecting) video.play().catch(() => {});
            else video.pause();
        });
    }, { threshold: 0.25, rootMargin: '-10% 0px' });
    document.querySelectorAll('.capability-card').forEach(card => {
        if (card.querySelector('video')) capabilityVideoObserver.observe(card);
    });

    // Fade-in animations for capability cards
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

    // Observe all fade-in elements
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const headerOffset = 100;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.scrollY - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});
