// Smooth Scroll Effect for Navbar Links
document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// Navbar Transparency Toggle on Scroll
window.addEventListener('scroll', function() {
    let navbar = document.querySelector('.custom-navbar');
    if (window.scrollY > 50) {
        navbar.style.background = "rgba(0, 0, 0, 0.9)";
    } else {
        navbar.style.background = "rgba(0, 0, 0, 0.8)";
    }
});

// FAQ Accordion Auto Close
document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelectorAll('.accordion-collapse').forEach(collapse => {
            if (collapse !== this.nextElementSibling) {
                collapse.classList.remove('show');
            }
        });
    });
});

// Ensure Navbar Closes After Clicking a Link (on Mobile)
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
        let navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse.classList.contains('show')) {
            navbarCollapse.classList.remove('show');
        }
    });
});

// Improve Hamburger Animation
document.querySelector('.navbar-toggler').addEventListener('click', function() {
    this.classList.toggle('active');
});
