// Toggle Mobile Menu
document.querySelector(".menu-toggle").addEventListener("click", function() {
    document.querySelector(".nav-links").classList.toggle("show");
});

// Enrollment Alert
function enroll() {
    alert("Thank you for your interest! Registration details will be sent soon.");
}

// FAQ Toggle
function toggleFAQ(element) {
    let answer = element.nextElementSibling;
    if (answer.style.display === "block") {
        answer.style.display = "none";
        element.innerText = element.innerText.replace("-", "+");
    } else {
        answer.style.display = "block";
        element.innerText = element.innerText.replace("+", "-");
    }
}
