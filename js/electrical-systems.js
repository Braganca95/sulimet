// ===== Electrical Systems Page JavaScript =====

document.addEventListener('DOMContentLoaded', () => {

    // ===== Hero Crossfade Slider =====
    const slider   = document.getElementById('hero-slider');
    const dotsWrap = document.getElementById('hero-dots');

    if (slider && dotsWrap) {
        const slides   = Array.from(slider.querySelectorAll('.hero-slide'));
        const dots     = Array.from(dotsWrap.querySelectorAll('.hero-dot'));
        const INTERVAL = 5000; // ms between auto-advances
        const FADE_MS  = 1000; // matches CSS transition duration
        let   current  = 0;
        let   timer    = null;
        let   locked   = false; // prevent rapid double-firing

        function goTo(index) {
            if (locked || index === current) return;
            locked = true;

            // Deactivate current
            slides[current].classList.remove('active');
            slides[current].setAttribute('aria-hidden', 'true');
            dots[current].classList.remove('active');
            dots[current].setAttribute('aria-selected', 'false');

            current = (index + slides.length) % slides.length;

            // Activate new
            slides[current].classList.add('active');
            slides[current].setAttribute('aria-hidden', 'false');
            dots[current].classList.add('active');
            dots[current].setAttribute('aria-selected', 'true');

            // Unlock after fade completes
            setTimeout(() => { locked = false; }, FADE_MS);
        }

        function startTimer() {
            clearInterval(timer);
            timer = setInterval(() => goTo(current + 1), INTERVAL);
        }

        // Dot click navigation
        dots.forEach((dot, i) => {
            dot.addEventListener('click', () => {
                goTo(i);
                startTimer(); // reset auto-advance on manual interaction
            });
        });

        // Touch/swipe support
        let touchStartX = 0;
        slider.addEventListener('touchstart', e => {
            touchStartX = e.changedTouches[0].clientX;
        }, { passive: true });
        slider.addEventListener('touchend', e => {
            const delta = e.changedTouches[0].clientX - touchStartX;
            if (Math.abs(delta) > 50) {
                goTo(delta < 0 ? current + 1 : current - 1);
                startTimer();
            }
        }, { passive: true });

        // Pause on hover/focus
        slider.addEventListener('mouseenter', () => clearInterval(timer));
        slider.addEventListener('mouseleave', startTimer);
        dotsWrap.addEventListener('focusin',  () => clearInterval(timer));
        dotsWrap.addEventListener('focusout', startTimer);

        startTimer();
    }

    // ===== Manufacturing video cards: autoplay when scrolled into view =====
    // Avoid video.currentTime = 0 — iOS Safari can hang on seek.
    // iOS Safari blocks .play() under Low Power Mode; swallow the promise rejection.
    const capabilityVideoObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const video = entry.target.querySelector('video');
            if (!video) return;
            if (entry.isIntersecting) video.play().catch(() => {});
            else video.pause();
        });
    }, { threshold: 0.25, rootMargin: '-10% 0px' });
    document.querySelectorAll('.manufacturing-videos-grid .capability-card').forEach(card => {
        if (card.querySelector('video')) capabilityVideoObserver.observe(card);
    });

    // ===== Fade-in animations =====
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

    // ===== Smooth scroll for anchor links =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const offsetPosition = target.getBoundingClientRect().top + window.scrollY - 100;
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                }
            }
        });
    });

    // ===== Mobile nav toggle =====
    const navToggle = document.getElementById('nav-toggle');
    const nav       = document.getElementById('nav');
    if (navToggle && nav) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            const isOpen = nav.classList.toggle('active');
            navToggle.setAttribute('aria-expanded', isOpen);
            document.body.classList.toggle('nav-open', isOpen);
        });
    }

    // ===== Header scroll shadow =====
    const header = document.getElementById('header');
    if (header) {
        window.addEventListener('scroll', () => {
            header.classList.toggle('scrolled', window.scrollY > 20);
        }, { passive: true });
    }
});
