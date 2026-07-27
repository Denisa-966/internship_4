// ======================
// Mobile Menu
// ======================
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");
const menuLink = document.querySelector(".header-wrapper-navbar-link");

if (menuBtn && closeBtn && menuLink) {
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
}

// ======================
// Privacy Section Active Link
// ======================
const sections = document.querySelectorAll(".privacy-wrapper-right h2");
const leftContent = document.querySelectorAll(".privacy-wrapper-left-content");

document.addEventListener("DOMContentLoaded", () => {
  const firstLink = document.querySelector(".privacy-wrapper-left-content");

  if (firstLink) {
    const title = firstLink.querySelector(".left-content-title");
    const symbol = firstLink.querySelector(".left-content-symbol");

    if (title) title.classList.add("active");
    if (symbol) symbol.classList.add("active");
  }
});

if (sections.length && leftContent.length) {
  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 150;

      if (window.scrollY >= sectionTop) {
        current = section.id;
      }
    });

    leftContent.forEach((link) => {
      const title = link.querySelector(".left-content-title");
      const symbol = link.querySelector(".left-content-symbol");

      if (title) title.classList.remove("active");
      if (symbol) symbol.classList.remove("active");

      if (link.getAttribute("href") === "#" + current) {
        if (title) title.classList.add("active");
        if (symbol) symbol.classList.add("active");
      }
    });
  });
}

// ======================
// FAQ Accordion
// ======================
const faqs = document.querySelectorAll(".faq-header");

faqs.forEach((faq) => {
  const content = faq.querySelector(".faq-content");

  if (content) {
    content.addEventListener("click", () => {
      faqs.forEach((item) => {
        if (item !== faq) {
          item.classList.remove("active");
        }
      });

      faq.classList.toggle("active");
    });
  }
});

// ======================
// Splide Slider
// ======================
document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector(".splide") && typeof Splide !== "undefined") {
    const splide = new Splide(".splide", {
      arrows: false,
    });

    splide.mount();
  }
});