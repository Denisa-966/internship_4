const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".header-wrapper-navbar-link");
const headerBar = document.querySelector("header");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  navMenu.classList.toggle("active");
  headerBar.classList.toggle("active");
});
