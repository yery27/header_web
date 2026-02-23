// header.js - Drop-in javascript for mobile menu functionality

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const headerNav = document.querySelector('.header-nav');
    const header = document.querySelector('.site-header');

    // Toggle mobile menu
    if (menuToggle && headerNav) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('is-active');
            headerNav.classList.toggle('is-open');
            document.body.classList.toggle('no-scroll');
        });

        // Close menu when clicking outside (click on the overlay/body)
        document.addEventListener('click', (e) => {
            if (headerNav.classList.contains('is-open') && 
                !headerNav.contains(e.target) && 
                !menuToggle.contains(e.target)) {
                
                menuToggle.classList.remove('is-active');
                headerNav.classList.remove('is-open');
                document.body.classList.remove('no-scroll');
            }
        });

        // Close menu when clicking a navigation link
        const navLinks = document.querySelectorAll('.nav-link, .mobile-actions .btn');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('is-active');
                headerNav.classList.remove('is-open');
                document.body.classList.remove('no-scroll');
            });
        });
    }

    // Add scroll effect to header (shrink/add shadow)
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            header.style.background = 'rgba(15, 23, 42, 0.95)';
            header.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'var(--header-bg)';
            header.style.boxShadow = 'none';
        }
    });
});
