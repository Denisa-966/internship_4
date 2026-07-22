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

const sections = document.querySelectorAll(".privacy-wrapper-right h2");
const leftContent = document.querySelectorAll(".privacy-wrapper-left-content");

window.addEventListener("DOMContentLoaded", () => {
  const firstLink = document.querySelector(".privacy-wrapper-left-content");

  firstLink.querySelector(".left-content-title").classList.add("active");
  firstLink.querySelector(".left-content-symbol").classList.add("active");
});

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150;

    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  leftContent.forEach((link) => {
    const title = link.querySelector(".left-content-title");
    const symbol = link.querySelector(".left-content-symbol");

    title.classList.remove("active");
    symbol.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      title.classList.add("active");
      symbol.classList.add("active");
    }
  });
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
