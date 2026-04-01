document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Particles.js
    particlesJS('particles-js', {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: ['#00f0ff', '#a200ff', '#ff007f'] },
            shape: { type: 'circle' },
            opacity: { value: 0.5, random: true },
            size: { value: 3, random: true },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#ffffff',
                opacity: 0.1,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: 'none',
                random: true,
                straight: false,
                out_mode: 'out',
                bounce: false
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: { enable: true, mode: 'grab' },
                onclick: { enable: true, mode: 'push' },
                resize: true
            },
            modes: {
                grab: { distance: 200, line_linked: { opacity: 0.3 } },
                push: { particles_nb: 4 }
            }
        },
        retina_detect: true
    });

    // 2. Sticky Navbar
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 3. Mobile Menu Toggle
    const menuBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.getElementById('nav-links');
    
    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = menuBtn.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('ph-list');
            icon.classList.add('ph-x');
        } else {
            icon.classList.remove('ph-x');
            icon.classList.add('ph-list');
        }
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = menuBtn.querySelector('i');
            icon.classList.remove('ph-x');
            icon.classList.add('ph-list');
        });
    });

    // 4. Countdown Timer
    // Set hackathon start date (April 26, 2026)
    const countDownDate = new Date("Apr 26, 2026 10:00:00").getTime();

    const updateCountdown = () => {
        const now = new Date().getTime();
        const distance = countDownDate - now;

        if (distance < 0) {
            document.getElementById("countdown").innerHTML = "<h2>HACKATHON HAS STARTED!</h2>";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").innerText = days.toString().padStart(2, '0');
        document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
        document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
        document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');
    };

    setInterval(updateCountdown, 1000);
    updateCountdown();

    // 5. FAQ Accordion
    const accordionItems = document.querySelectorAll('.accordion-item');
    
    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        header.addEventListener('click', () => {
            // Close other open items
            accordionItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            // Toggle current item
            item.classList.toggle('active');
        });
    });

    // 6. Scroll Reveal Animation removed based on user request

    // 7. Registration Form Logic removed

    // 8. WhatsApp Popup Logic
    const waPopup = document.getElementById('wa-popup');
    const waFab   = document.getElementById('wa-fab');
    const waClose = document.getElementById('wa-close');

    if (waPopup && waFab && waClose) {
        // If user already closed it, show only FAB
        if (localStorage.getItem('wa_dismissed') === '1') {
            waPopup.classList.add('wa-hidden');
            waFab.classList.add('wa-fab-visible');
        } else {
            // Show big popup on load, auto-shrink after 5 seconds
            setTimeout(() => {
                waPopup.classList.add('wa-hidden');
                waFab.classList.add('wa-fab-visible');
            }, 5000);
        }

        waClose.addEventListener('click', () => {
            waPopup.classList.add('wa-hidden');
            waFab.classList.add('wa-fab-visible');
            localStorage.setItem('wa_dismissed', '1');
        });
    }

    // 9. Template Download Popup Logic
    const templateTrigger = document.getElementById('template-trigger-btn');
    const templatePanel   = document.getElementById('template-panel');
    const templateOverlay = document.getElementById('template-overlay');
    const templateClose   = document.getElementById('template-close');

    if (templateTrigger && templatePanel && templateOverlay && templateClose) {
        const openTemplatePanel = () => {
            templatePanel.classList.add('active');
            templateOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        };

        const closeTemplatePanel = () => {
            templatePanel.classList.remove('active');
            templateOverlay.classList.remove('active');
            document.body.style.overflow = '';
        };

        templateTrigger.addEventListener('click', openTemplatePanel);
        templateClose.addEventListener('click', closeTemplatePanel);
        templateOverlay.addEventListener('click', closeTemplatePanel);

        // ESC key support
        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && templatePanel.classList.contains('active')) {
                closeTemplatePanel();
            }
        });
    }
});
