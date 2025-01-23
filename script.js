var login = document.querySelector(".signin-switch");
var register = document.querySelector(".signup-switch");
var box_login = document.querySelector(".login-box");
var box_signup = document.querySelector(".signup-box");
var forgot_link = document.querySelector(".forgot-link");
var box_forgot = document.querySelector(".forgot-box");

// Sign-up-switch button clicked //
register.addEventListener("click", function () {
  box_login.classList.add("hidden");
  box_signup.classList.remove("hidden");
  box_forgot.classList.add("hidden");

  login.classList.remove("active");
  register.classList.add("active");
});

// Log-in-switch button clicked //
login.addEventListener("click", function () {
  box_login.classList.remove("hidden");
  box_signup.classList.add("hidden");
  box_forgot.classList.add("hidden");
  login.classList.add("active");
  register.classList.remove("active");
});

// Forgot password link clicked//
forgot_link.addEventListener("click", function () {
  box_forgot.classList.remove("hidden");
  box_login.classList.add("hidden");
});
