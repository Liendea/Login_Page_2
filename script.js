var login = document.querySelector(".signin-switch");
var register = document.querySelector(".signup-switch");
var box_login = document.querySelector(".login-box");
var box_signup = document.querySelector(".signup-box");

register.addEventListener("click", function () {
  box_login.classList.add("hidden");
  box_signup.classList.remove("hidden");
  box_signup.classList.add("active");
});

login.addEventListener("click", function () {
  box_login.classList.remove("hidden");
  box_login.classList.add("active");
  box_signup.classList.remove("active");
  box_signup.classList.add("hidden");
});

var Lswitch = document.querySelector(".signin-switch");
var Rswitch = document.querySelector(".signup-switch");

Lswitch.addEventListener("click", function () {
  Lswitch.classList.add("active");
  Rswitch.classList.remove("active");
});

Rswitch.addEventListener("click", function () {
  Rswitch.classList.add("active");
  Lswitch.classList.remove("active");
});
