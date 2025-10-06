document.addEventListener("DOMContentLoaded", () => {
    // Dynamic Year Update
    const currentYear = new Date().getFullYear();
    document.getElementById("current-year").textContent = currentYear;

    // Last Modified Date
    const lastModified = document.lastModified;
    document.getElementById("last-modified").textContent = lastModified;

    // Form Validation and Error Message
    const form = document.getElementById('newsletterForm');
    const emailInput = document.getElementById('email');
    const errorMsg = document.getElementById('error-msg');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // Validate Email
        if (!emailInput.validity.valid) {
            errorMsg.style.display = 'block';
            errorMsg.textContent = 'Please enter a valid email address.';
        } else {
            errorMsg.style.display = 'none';
            alert('Thank you for subscribing!');
            emailInput.value = ''; // Clear the input field after successful submission
        }
    });

    // Add hover effect for navigation links
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach((link) => {
        link.addEventListener("mouseover", () => {
            link.style.color = "orange"; // Highlight the link on hover
        });
        link.addEventListener("mouseout", () => {
            link.style.color = ""; // Reset to original color
        });
    });

    // Interactive Image Cards
    const cards = document.querySelectorAll(".home-grid section");
    cards.forEach((card) => {
        card.addEventListener("click", () => {
            const cardTitle = card.querySelector("h2").textContent;
            alert(`You clicked on the ${cardTitle} section!`);
        });
    });
});
