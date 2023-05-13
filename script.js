const nav = document.querySelector(".main-nav");
const navToggler = document.querySelector(".nav-toggler");
const togglerImg = navToggler.querySelector("img");
const navLinks = document.querySelectorAll(".main-nav a");
const logo =  document.querySelector(".logo-head");
const makeDonation = document.querySelector(".Make-donation");

navToggler.addEventListener("click", toggleNav);



function toggleNav() {
  nav.classList.toggle("active");

  if (togglerImg.src.includes("hamburger")) {
    togglerImg.src = "ressources/pack/cross.svg";
    logo.style.display = "none"
    makeDonation.style.display ="none"
    /*pour l'accessibilité et donner des indication supplémentation à l'utilisateur*/

    navToggler.ariaExpanded = true;
  } else {
    togglerImg.src = "ressources/pack/hamburger.svg";
    logo.style.display = ""
    makeDonation.style.display =""
    navToggler.ariaExpanded = false;
  }
}