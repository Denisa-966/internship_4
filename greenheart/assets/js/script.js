let header = document.querySelector("header");
let menuBtn = document.querySelector(".menu-btn");
let closeBtn = document.querySelector(".close-btn");
let side = document.querySelector(".right-side");
let headerLogo = document.querySelector(".img-logo");
let headerNavIcon = document.querySelector(".header-nav-icon");
let subMenu = document.querySelector(".sub-menu");

menuBtn.addEventListener("click", () => {
  header.classList.add("active");
  side.classList.add("active");
  headerLogo.classList.add("active");
  closeBtn.style.display = "block";
  menuBtn.style.display = "none";
});

closeBtn.addEventListener("click", () => {
  header.classList.remove("active");
  side.classList.remove("active");
  headerLogo.classList.remove("active");
  closeBtn.style.display = "none";
  menuBtn.style.display = "block";
});

document.querySelectorAll(".sub-nav").forEach((item) => {
  const headerNavIcon = item.querySelector(".header-nav-icon");
  const subMenu = item.querySelector(".sub-menu");

  headerNavIcon.addEventListener("click", () => {
    subMenu.classList.toggle("active");
    headerNavIcon.classList.toggle("active");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide(".members-silder.splide", {
    perPage: 4,
    gap: 24,

    breakpoints: {
      768: {
        perPage: 3,
      },
      429: {
        perPage: 1,
      },
    },
  });

  splide.mount();
});
