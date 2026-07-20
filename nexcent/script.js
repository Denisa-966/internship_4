let nav = document.querySelector(".nav-links");
let menuBtn = document.querySelector(".menu-btn");
let closeBtn = document.querySelector(".close-btn");

function openMenu() {
  nav.style.display = "block";
  menuBtn.style.display = "none";
  closeBtn.style.display = "block";
}

function closeMenu() {
  nav.style.display = "none";
  menuBtn.style.display = "block";
  closeBtn.style.display = "none";
}