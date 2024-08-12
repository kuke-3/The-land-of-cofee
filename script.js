document.addEventListener("DOMContentLoaded", function () {
  var menuToggle = document.getElementById("menuToggle");
  var navbar = document.getElementById("navbar");

  menuToggle.addEventListener("click", function () {
    navbar.classList.toggle("show");
  });
});
