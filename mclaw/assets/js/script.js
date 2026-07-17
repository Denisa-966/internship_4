let menuBtn = document.querySelector(".menu-btn");
let closeBtn = document.querySelector(".close-btn");
let menuLink = document.querySelector(".header-wrapper-navbar-link");

menuBtn.addEventListener("click", () => {
  closeBtn.style.display = "block";
  menuBtn.style.display = "none";
  menuLink.style.display = "block";
});
closeBtn.addEventListener("click", () => {
  closeBtn.style.display = "none";
  menuBtn.style.display = "block";
  menuLink.style.display = "none";
});
