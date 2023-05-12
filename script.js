const nav = document.querySelector(".main-nav");
const navToggler = document.querySelector(".nav-toggler");
const togglerImg = navToggler.querySelector("img");
const navLinks = document.querySelectorAll(".main-nav a");

navToggler.addEventListener("click", toggleNav);



function toggleNav() {
  nav.classList.toggle("active");

  if (togglerImg.src.includes("hamburger")) {
    togglerImg.src = "ressources/pack/cross.svg";

    /*pour l'accessibilité et donner des indication supplémentation à l'utilisateur*/

    navToggler.ariaExpanded = true;
  } else {
    togglerImg.src = "ressources/pack/hamburger.svg";
    navToggler.ariaExpanded = false;
  }
}