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

    // Capability card videos: pause by default, play on hover/touch
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    document.querySelectorAll('.capability-card').forEach(card => {
        const video = card.querySelector('video');
        if (!video) return;
        video.pause();
        // iOS Safari blocks .play() under Low Power Mode; swallow the promise rejection.
        const safePlay = () => video.play().catch(() => {});
        if (isTouchDevice) {
            const videoObserver = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) { safePlay(); }
                    else { video.pause(); video.currentTime = 0; }
                });
            }, { threshold: 0.5 });
            videoObserver.observe(card);
        } else {
            card.addEventListener('mouseenter', safePlay);
            card.addEventListener('mouseleave', () => { video.pause(); video.currentTime = 0; });
        }
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
