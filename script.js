document.addEventListener("DOMContentLoaded", function () {
    console.log("Script Loaded Successfully!");

    // Smooth Scrolling for Navigation Links
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 60,
                    behavior: "smooth"
                });
            }
        });
    });

    // Navbar Toggle for Mobile
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector(".navbar-collapse");

    navbarToggler.addEventListener("click", function () {
        navbarCollapse.classList.toggle("show");
    });

    // Contact Form Submission
    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault();

        // Get form values
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const subject = document.getElementById("subject").value;
        const message = document.getElementById("message").value.trim();

        // Basic validation
        if (!name || !email || !message) {
            alert("Please fill in all required fields.");
            return;
        }

        console.log("Form Submitted:", { name, email, phone, subject, message });

        // Simulate form submission (Replace this with actual API call if needed)
        setTimeout(() => {
            alert("Your message has been sent successfully!");
            document.getElementById("contact-form").reset();
        }, 500);
    });

    // FAQ Accordion Behavior
    const faqButtons = document.querySelectorAll(".accordion-button");
    faqButtons.forEach(button => {
        button.addEventListener("click", function () {
            const target = this.getAttribute("data-bs-target");
            document.querySelector(target).classList.toggle("show");
        });
    });

});
