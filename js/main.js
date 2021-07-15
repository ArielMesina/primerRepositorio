// ----Navbar----
const menu = document.querySelector(".navbar__menuList");
const openMenuBtn = document.querySelector(".navbar__openMenu");
const closeMenuBtn = document.querySelector(".navbar__closeMenu");
function toggleMenu() {
  menu.classList.toggle("menuOpened");
}
openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);