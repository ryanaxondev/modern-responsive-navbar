// ===== Navbar Script =====

// Get DOM elements
const toggleBtn = document.querySelector('.toggle-btn');
const toggleBtnIcon = toggleBtn.querySelector('i');
const dropDownMenu = document.querySelector('.dropdown-menu');
const navbar = document.querySelector('.navbar');
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".links a, .dropdown-menu a");

// Toggle mobile menu
toggleBtn.addEventListener("click", () => {
    dropDownMenu.classList.toggle('open');
    const isOpen = dropDownMenu.classList.contains('open');
    toggleBtnIcon.className = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars';
});

// Auto-close dropdown when clicking a link
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        if (dropDownMenu.classList.contains("open")) {
            dropDownMenu.classList.remove("open");
            toggleBtnIcon.className = 'fa-solid fa-bars';
        }
    });
});

// Navbar scroll effect + Scrollspy
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);

    // Scrollspy: highlight active nav link
    let currentSection = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 80;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.id;
        }
    });

    navLinks.forEach(link => {
        link.classList.toggle("active", link.getAttribute("href") === `#${currentSection}`);
    });
});
