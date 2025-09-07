// Basic Form Validation
document.getElementById("signup-form").addEventListener("submit", function (e) {
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  if (password !== confirmPassword) {
    e.preventDefault();
    window.alert("Passwords do not match!");
  } else {
    // In a real application, you would submit the form here
    e.preventDefault();
    window.alert("Account created successfully!");
  }
});
