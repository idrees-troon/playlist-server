// toggling between login and signup panels
document.getElementById("signUpBtn").addEventListener("click", function () {
  document.getElementById("container").classList.add("show-signup");
  // Show signup panel
});

document.getElementById("signInBtn").addEventListener("click", function () {
  document.getElementById("container").classList.remove("show-signup");
  // Show login panel
});

// redirection
const loginSignupBtn = document.querySelector(".login-signup-btn");

loginSignupBtn.addEventListener("click", () => {
  window.location.href = "login.html";
  // Redirect to login page
});
