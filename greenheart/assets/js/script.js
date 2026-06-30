let header = document.querySelector("header");
let menuBtn = document.querySelector(".menu-btn");
let closeBtn = document.querySelector(".close-btn");

let side = document.querySelector(".right-side");
let headerLogo = document.querySelector(".header-logo");

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

// function openMenu() {
//   nav.style.display = "block";
//   menuBtn.style.display = "none";
//   closeBtn.style.display = "block";
//     btn.style.display = "block";
//     side.style.display = "block";

// }

// function closeMenu() {
//   nav.style.display = "none";
//   menuBtn.style.display = "block";
//   closeBtn.style.display = "none";
//   btn.style.display = "none";
// }
