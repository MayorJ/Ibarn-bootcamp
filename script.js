// // Toggle Mobile Menu
// document.querySelector(".menu-toggle").addEventListener("click", function() {
//     document.querySelector(".nav-links").classList.toggle("show");
// });

// // Enrollment Alert
// function enroll() {
//     alert("Thank you for your interest! Registration details will be sent soon.");
// }

// // FAQ Toggle
// function toggleFAQ(element) {
//     let answer = element.nextElementSibling;
//     if (answer.style.display === "block") {
//         answer.style.display = "none";
//         element.innerText = element.innerText.replace("-", "+");
//     } else {
//         answer.style.display = "block";
//         element.innerText = element.innerText.replace("+", "-");
//     }
// }

// Toggle Mobile Menu
document.querySelector(".menu-toggle").addEventListener("click", function() {
    document.querySelector(".nav-links").classList.toggle("show");
});

// Enrollment Alert
function enroll() {
    alert("Thank you for your interest! Registration details will be sent soon.");
}

// Fade-in Animation on Scroll
const fadeElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.2 });

fadeElements.forEach(el => observer.observe(el));
