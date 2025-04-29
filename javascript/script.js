const navbar = document.querySelector('.navbar');
const navbarNav = document.querySelector('.navbar-nav');
const barsBtn = document.getElementById('bars');
const closeBtn = document.getElementById('close');
const navLinks = document.querySelectorAll('.navbar-nav a');

// Toggle mobile menu
const toggleMenu = (e) => {
    e.preventDefault();
    navbarNav.classList.toggle('active');
    barsBtn.style.display = navbarNav.classList.contains('active') ? 'none' : 'block';
    closeBtn.style.display = navbarNav.classList.contains('active') ? 'block' : 'none';
    document.body.style.overflow = navbarNav.classList.contains('active') ? 'hidden' : '';
};

barsBtn.addEventListener('click', toggleMenu);
closeBtn.addEventListener('click', toggleMenu);

// Close menu when clicking on nav links
navLinks.forEach(link => {
    link.addEventListener('click', toggleMenu);
});

// ===== Scroll Effects =====
// Navbar scroll effect
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// Section animation on scroll
const animateSections = () => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });
};

// Smooth scrolling for anchor links
const initSmoothScroll = () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
};

// ===== Product Card Effects =====
const initProductCardEffects = () => {
    document.querySelectorAll('.product-card').forEach(card => {
        const img = card.querySelector('.product-image');
        
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const moveX = (x - centerX) / 30;
            const moveY = (y - centerY) / 30;
            
            img.style.transform = `translate(-50%, -50%) translate(${moveX}px, ${moveY}px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            img.style.transform = 'translate(-50%, -50%)';
        });
    });
};

// Initialize all functions when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    animateSections();
    initSmoothScroll();
    initProductCardEffects();
});

document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Animasi elemen secara bertahap
    const elements = document.querySelectorAll('h1, .intro, h2, p, a, .recycled-materials, .feature-card');
    
    elements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, 100 + (index * 100));
    });
    
    // Efek hover untuk kartu fitur
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });
});

window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});