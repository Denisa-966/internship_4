let menuBtn = document.querySelector(".menu-btn");
let closeBtn = document.querySelector(".close-btn");
let menuLink = document.querySelector(".header-wrapper-navbar-link");
let circleArrow = document.querySelector(".two-column-wrapper-left-side-content-circle");

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

const faqs = document.querySelectorAll(".faq-header");

faqs.forEach((faq) => {
  faq.querySelector(".faq-content").addEventListener("click", () => {
    faqs.forEach((item) => {
      if (item !== faq) item.classList.remove("active");
    });
    faq.classList.toggle("active");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide(".splide", {
    arrows: false,
  });
  splide.mount();
});
