const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".header-wrapper-navbar-link");
const headerBar = document.querySelector(".header");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  navMenu.classList.toggle("active");
  headerBar.classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide(".testimonial.splide", {
    arrows: false,
  });
  splide.mount();
});

document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide(".our-resources.splide", {
    pagination: false,
    perPage: 3,
    gap: 24,
    breakpoints: {
      991: { perPage: 2 },
      600: { perPage: 1 },
    },
  });
  splide.mount();
});

document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide(".card-splide.splide", {
    pagination: false,
    arrows: false,
    perPage: 2,
    gap: 100,
  });
  splide.mount();
});
