document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let isValid = true;

    // Fields
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
    const message = document.getElementById("message");

    // Error messages
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const confirmPasswordError = document.getElementById("confirmPasswordError");
    const messageError = document.getElementById("messageError");
    const successMessage = document.getElementById("successMessage");

    // Reset messages
    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";
    messageError.textContent = "";
    successMessage.textContent = "";

    // Name
    if (name.value.trim() === "") {
      nameError.textContent = "Name is required.";
      isValid = false;
    }

    // Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value.trim() === "") {
      emailError.textContent = "Email is required.";
      isValid = false;
    } else if (!emailPattern.test(email.value.trim())) {
      emailError.textContent = "Enter a valid email address.";
      isValid = false;
    }

    // Password
    if (password.value.length < 8) {
      passwordError.textContent = "Password must be at least 8 characters.";
      isValid = false;
    } else if (!/[A-Z]/.test(password.value) || !/[0-9]/.test(password.value)) {
      passwordError.textContent = "Password must contain at least one uppercase letter and one number.";
      isValid = false;
    }

    // Confirm Password
    if (confirmPassword.value !== password.value) {
      confirmPasswordError.textContent = "Passwords do not match.";
      isValid = false;
    }

    // Message
    if (message.value.trim().length < 10) {
      messageError.textContent = "Message must be at least 10 characters.";
      isValid = false;
    }

    // Success
    if (isValid) {
      successMessage.textContent = "Thank you! Your message has been sent.";
      form.reset();
    }
  });
});
