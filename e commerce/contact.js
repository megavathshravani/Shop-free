document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.querySelector(".contact-form");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form from submitting

        // Get form field values
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        // Validate form fields
        if (!validateForm(name, email, subject, message)) {
            return;
        }

        // If validation passes, show a success message (simulate submission)
        alert("Your message has been sent successfully!");

        // Reset form fields after submission
        contactForm.reset();
    });

    function validateForm(name, email, subject, message) {
        // Check if all fields are filled
        if (name === "" || email === "" || subject === "" || message === "") {
            alert("All fields are required!");
            return false;
        }

        // Check for a valid email format
        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return false;
        }

        return true;
    }

    function validateEmail(email) {
        // Regular expression for validating an email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }
});
