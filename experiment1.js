document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("regForm");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const age = Number(document.getElementById("age").value);

        const nameError = document.getElementById("nameError");
        const emailError = document.getElementById("emailError");
        const ageError = document.getElementById("ageError");

        nameError.textContent = "";
        emailError.textContent = "";
        ageError.textContent = "";

        let valid = true;

        if (name.length < 5 || name.length > 90) {
            nameError.textContent = "Name must be between 5 and 90 characters.";
            valid = false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            emailError.textContent = "Please enter a valid email address.";
            valid = false;
        }

        if (age < 15 || age > 40) {
            ageError.textContent = "Age must be between 15 and 40.";
            valid = false;
        }

        if (valid) {
            alert("Registration Successful!");
            form.reset();
        }
    });

});
