// Scroll Progress Bar
window.onscroll = function() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementById("progress").style.width = scrolled + "%";
    
    // Header Scroll Effect
    const header = document.getElementById('header');
    if (winScroll > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
};

// Reveal Animations on Scroll
const reveal = () => {
    const reveals = document.querySelectorAll('.reveal');
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const revealTop = reveals[i].getBoundingClientRect().top;
        const revealPoint = 150;
        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('active');
        }
    }
};

window.addEventListener('scroll', reveal);
window.addEventListener('load', reveal);

// Smooth Page Transitions (Optional)
document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if (this.hostname === window.location.hostname && this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Initial Reveal
reveal();

// Certificate Modal Logic
function openModal(imgSrc, title) {
    const modal = document.getElementById("certModal");
    const modalImg = document.getElementById("modalImg");
    const modalTitle = document.getElementById("modalTitle");
    
    if(modal && modalImg) {
        modal.style.display = "block";
        modalImg.src = imgSrc;
        modalTitle.textContent = title;
    }
}

function closeModal() {
    const modal = document.getElementById("certModal");
    if(modal) {
        modal.style.display = "none";
    }
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById("certModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Theme Toggling
const themeBtn = document.querySelector('.theme-switch');
const currentTheme = localStorage.getItem('theme');

const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

if(mobileMenu) {
    mobileMenu.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
}

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        if(themeBtn) themeBtn.textContent = '☀️';
    }
}

if(themeBtn) {
    themeBtn.addEventListener('click', () => {
        let theme = document.documentElement.getAttribute('data-theme');
        if (theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            themeBtn.textContent = '🌙';
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            themeBtn.textContent = '☀️';
        }
    });
}

// Contact Form Handler
const contactForm = document.getElementById('contact-form');
if(contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const status = document.getElementById('form-status');
        status.style.display = 'block';
        contactForm.reset();
        setTimeout(() => {
            status.style.display = 'none';
        }, 5000);
    });
}
