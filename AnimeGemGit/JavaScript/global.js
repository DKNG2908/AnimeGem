document.addEventListener("DOMContentLoaded", () => {
    // === Navigation Active State ===
    const currentPage = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });

    // === Scroll to Top Button ===
    const scrollToTopButton = document.querySelector("#scroll-to-top");
    if (scrollToTopButton) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 200) {
                scrollToTopButton.style.display = "block";
            } else {
                scrollToTopButton.style.display = "none";
            }
        });

        scrollToTopButton.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    // === Form Validation for Contact Page ===
    const contactForm = document.querySelector("#contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            const name = document.querySelector("#name").value.trim();
            const email = document.querySelector("#email").value.trim();
            const message = document.querySelector("#message").value.trim();
            let hasError = false;

            if (!name) {
                alert("Veuillez entrer votre nom.");
                hasError = true;
            }
            if (!email || !validateEmail(email)) {
                alert("Veuillez entrer une adresse email valide.");
                hasError = true;
            }
            if (!message) {
                alert("Veuillez entrer un message.");
                hasError = true;
            }

            if (hasError) {
                e.preventDefault(); // Empêche l'envoi du formulaire en cas d'erreur
            }
        });
    }

    // === Helper Function to Validate Email ===
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // === Dynamic Year for Footer ===
    const yearSpan = document.querySelector("#year");
    if (yearSpan) {
        const currentYear = new Date().getFullYear();
        yearSpan.textContent = currentYear;
    }
});
