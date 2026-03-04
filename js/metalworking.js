// ===== Metalworking Page JavaScript =====

document.addEventListener('DOMContentLoaded', () => {
    // Hero image swap on category hover
    const imgFront    = document.getElementById('hero-img-front');
    const imgBack     = document.getElementById('hero-img-back');
    const annotations = document.getElementById('hero-annotations');

    document.querySelectorAll('.category-column').forEach(col => {
        col.addEventListener('mouseenter', () => {
            const isAutomotive = col.dataset.category === 'automotive';
            imgFront.classList.toggle('hero-img-active', isAutomotive);
            imgBack.classList.toggle('hero-img-active', !isAutomotive);
            annotations.classList.toggle('hero-annotations-active', isAutomotive);
        });
        col.addEventListener('mouseleave', () => {
            imgFront.classList.add('hero-img-active');
            imgBack.classList.remove('hero-img-active');
            annotations.classList.add('hero-annotations-active');
        });
    });

    // Capability card videos: pause by default, play on hover
    document.querySelectorAll('.capability-card').forEach(card => {
        const video = card.querySelector('video');
        if (!video) return;
        video.pause();
        card.addEventListener('mouseenter', () => video.play());
        card.addEventListener('mouseleave', () => { video.pause(); video.currentTime = 0; });
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
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});
