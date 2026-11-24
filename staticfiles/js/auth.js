document.addEventListener("DOMContentLoaded", function () {

    // PASSWORD VISIBILITY
    document.querySelectorAll(".toggle-password").forEach(button => {
        button.addEventListener("click", function () {
            const input = document.getElementById(this.dataset.target);

            if (!input) return;

            if (input.type === "password") {
                input.type = "text";
                this.textContent = "Hide";
            } else {
                input.type = "password";
                this.textContent = "Show";
            }
        });
    });

    // PASSWORD CONFIRMATION
    const registerForm = document.getElementById("registerForm");

    if (registerForm) {
        registerForm.addEventListener("submit", function (event) {
            const password = document.getElementById("password").value;
            const confirmPassword = document.getElementById("confirm_password").value;

            if (password !== confirmPassword) {
                event.preventDefault();
                alert("Passwords do not match!");
            }
        });
    }

});