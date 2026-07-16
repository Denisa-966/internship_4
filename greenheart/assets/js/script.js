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

document.addEventListener("DOMContentLoaded", () => {
  const sliders = document.querySelectorAll(
    ".members-silder.splide, .members-silder-2.splide, .members-silder-3.splide",
  );

  if (!sliders.length) {
    return;
  }

  sliders.forEach((slider) => {
    new Splide(slider, {
      perPage: 4,
      gap: 24,
      pagination: false,
      breakpoints: {
        768: {
          perPage: 3,
        },
        429: {
          perPage: 1,
        },
      },
    }).mount();
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide(".benefits-silder.splide", {
    perpage: 1,
    arrows: false,
    pagination: false,
  });
  document.getElementById("prevBtn").addEventListener("click", function () {
    splide.go("-1");
  });
  document.getElementById("nextBtn").addEventListener("click", function () {
    splide.go("+1");
  });

  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  function updateArrows() {
    const currentIndex = splide.index;
    const lastIndex = splide.length - 1;
    if (currentIndex === 0) {
      prevBtn.style.display = "flex";
      nextBtn.style.display = "flex";
    } else if (currentIndex === lastIndex) {
      prevBtn.style.display = "flex";
      nextBtn.style.display = "flex";
    } else {
      prevBtn.style.display = "flex";
      nextBtn.style.display = "flex";
    }
  }

  splide.on("mounted move", updateArrows);
  splide.mount();
});

document.addEventListener("DOMContentLoaded", () => {
  const sliders = document.querySelectorAll(".blog-description-silder");

  if (!sliders.length) {
    return;
  }

  sliders.forEach((slider) => {
    new Splide(slider, {
      perPage: 1,
      pagination: false,
    }).mount();
  });
});
