// ===== DOM Elements =====
const header = document.getElementById('header');
const navToggle = document.getElementById('nav-toggle');
const nav = document.getElementById('nav');
const navLinks = document.querySelectorAll('.nav-link');
const servicesTrack = document.getElementById('servicesTrack');
const servicesPrevBtn = document.getElementById('servicesPrevBtn');
const servicesNextBtn = document.getElementById('servicesNextBtn');
const servicesCarouselDots = document.getElementById('servicesCarouselDots');
const contactForm = document.getElementById('contactForm');

// ===== Header Scroll Effect =====
function handleHeaderScroll() {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

window.addEventListener('scroll', handleHeaderScroll);

// ===== Mobile Navigation =====
navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    nav.classList.toggle('active');
});

// Close mobile nav when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        nav.classList.remove('active');
    });
});

// ===== Active Navigation Link =====
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.scrollY;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 150;
        const sectionId = section.getAttribute('id');

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveNavLink);

// ===== Services Carousel =====
let currentServiceSlide = 0;
const serviceItems = document.querySelectorAll('.service-item');
let serviceItemsPerView = 3;
let totalServiceSlides = Math.ceil(serviceItems.length / serviceItemsPerView);

function positionCarouselArrows() {
    const firstDivider = document.querySelector('.service-item .service-divider');
    if (firstDivider && servicesPrevBtn && servicesNextBtn) {
        const carousel = document.querySelector('.services-carousel');
        const carouselTop = carousel.getBoundingClientRect().top;
        const dividerRect = firstDivider.getBoundingClientRect();
        const dividerCenter = dividerRect.top + dividerRect.height / 2 - carouselTop;
        const btnHeight = servicesPrevBtn.offsetHeight;
        const topPos = dividerCenter - btnHeight / 2;
        servicesPrevBtn.style.top = topPos + 'px';
        servicesNextBtn.style.top = topPos + 'px';
    }
}

function updateServiceItemsPerView() {
    const width = window.innerWidth;
    if (width <= 768) {
        serviceItemsPerView = 1;
    } else if (width <= 1024) {
        serviceItemsPerView = 2;
    } else {
        serviceItemsPerView = 3;
    }
    totalServiceSlides = Math.ceil(serviceItems.length - serviceItemsPerView + 1);
    if (totalServiceSlides < 1) totalServiceSlides = 1;
    if (currentServiceSlide >= totalServiceSlides) {
        currentServiceSlide = totalServiceSlides - 1;
    }
    updateServicesCarousel();
    createServicesCarouselDots();
    positionCarouselArrows();
}

function createServicesCarouselDots() {
    servicesCarouselDots.innerHTML = '';
    for (let i = 0; i < totalServiceSlides; i++) {
        const dot = document.createElement('span');
        dot.classList.add('carousel-dot');
        if (i === currentServiceSlide) {
            dot.classList.add('active');
        }
        dot.addEventListener('click', () => goToServiceSlide(i));
        servicesCarouselDots.appendChild(dot);
    }
}

function updateServicesCarousel() {
    const wrapper = document.querySelector('.services-wrapper');
    const gap = 30; // 1.875rem in px
    const wrapperWidth = wrapper ? wrapper.offsetWidth : 0;
    const itemWidth = (wrapperWidth - gap * (serviceItemsPerView - 1)) / serviceItemsPerView;
    const translateX = currentServiceSlide * (itemWidth + gap);
    servicesTrack.style.transform = `translateX(-${translateX}px)`;

    // Update dots
    const dots = document.querySelectorAll('#servicesCarouselDots .carousel-dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentServiceSlide);
    });
}

function nextServiceSlide() {
    currentServiceSlide = (currentServiceSlide + 1) % totalServiceSlides;
    updateServicesCarousel();
}

function prevServiceSlide() {
    currentServiceSlide = (currentServiceSlide - 1 + totalServiceSlides) % totalServiceSlides;
    updateServicesCarousel();
}

function goToServiceSlide(index) {
    currentServiceSlide = index;
    updateServicesCarousel();
}

if (servicesPrevBtn && servicesNextBtn) {
    servicesPrevBtn.addEventListener('click', prevServiceSlide);
    servicesNextBtn.addEventListener('click', nextServiceSlide);
}

// Touch/Swipe support for services carousel
let servicesTouchStartX = 0;
let servicesTouchEndX = 0;

if (servicesTrack) {
    servicesTrack.addEventListener('touchstart', (e) => {
        servicesTouchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    servicesTrack.addEventListener('touchend', (e) => {
        servicesTouchEndX = e.changedTouches[0].screenX;
        handleServicesSwipe();
    }, { passive: true });
}

function handleServicesSwipe() {
    const swipeThreshold = 50;
    const diff = servicesTouchStartX - servicesTouchEndX;

    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            nextServiceSlide();
        } else {
            prevServiceSlide();
        }
    }
}

// Initialize services carousel
window.addEventListener('load', updateServiceItemsPerView);
window.addEventListener('resize', updateServiceItemsPerView);

// ===== Counter Animation =====
function animateCounters() {
    const counters = document.querySelectorAll('.global-number[data-target]');

    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16);
        let current = 0;

        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.floor(current).toLocaleString();
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target.toLocaleString();
            }
        };

        updateCounter();
    });
}

// ===== Intersection Observer for Animations =====
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2
};

const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            fadeInObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

// Add fade-in class to elements
document.querySelectorAll('.value-card, .service-item, .global-stat').forEach(el => {
    el.classList.add('fade-in');
    fadeInObserver.observe(el);
});

// Global stats counter animation observer (replays every time section scrolls into view)
const globalStatsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
        } else {
            // Reset counters to 0 when scrolled out so they replay on re-entry
            document.querySelectorAll('.global-number[data-target]').forEach(counter => {
                counter.textContent = '0';
            });
        }
    });
}, observerOptions);

const globalSection = document.querySelector('.global');
if (globalSection) {
    globalStatsObserver.observe(globalSection);
}

// ===== Contact Form =====
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);

        // Simple validation
        if (!data.name || !data.email || !data.message) {
            showNotification(t('notification.required'), 'error');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            showNotification(t('notification.email'), 'error');
            return;
        }

        // Simulate form submission
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = '...';
        submitBtn.disabled = true;

        setTimeout(() => {
            showNotification(t('notification.success'), 'success');
            contactForm.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 1500);
    });
}

// ===== Notification System =====
function showNotification(message, type = 'success') {
    // Remove existing notification
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <span>${message}</span>
        <button class="notification-close">&times;</button>
    `;

    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 20px 30px;
        background: ${type === 'success' ? '#10b981' : '#ef4444'};
        color: white;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        display: flex;
        align-items: center;
        gap: 15px;
        z-index: 9999;
        animation: slideIn 0.3s ease;
        max-width: 400px;
    `;

    // Add animation keyframes
    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideIn {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            @keyframes slideOut {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(100%);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }

    document.body.appendChild(notification);

    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.style.cssText = `
        background: none;
        border: none;
        color: white;
        font-size: 24px;
        cursor: pointer;
        padding: 0;
        line-height: 1;
    `;

    closeBtn.addEventListener('click', () => {
        notification.style.animation = 'slideOut 0.3s ease forwards';
        setTimeout(() => notification.remove(), 300);
    });

    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.animation = 'slideOut 0.3s ease forwards';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// ===== Smooth Scroll for Anchor Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===== Parallax Effect for Hero =====
const heroBg = document.querySelector('.hero-bg');
if (heroBg) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        heroBg.style.transform = `translateY(${scrolled * 0.5}px)`;
    });
}

// ===== Initialize =====
document.addEventListener('DOMContentLoaded', () => {
    // Initial header check
    handleHeaderScroll();

    // Initial nav link check
    updateActiveNavLink();

    console.log('Sulimet website initialized successfully!');
});
