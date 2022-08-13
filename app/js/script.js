const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const headerLinks = document.querySelector(".header__links");
const hamburger = document.querySelector(".header__hamburger");

hamburger.addEventListener("click", function () {
  if (header.classList.contains("open")) {
    //close menu
    header.classList.remove("open");

    overlay.classList.remove("fade-in");
    overlay.classList.add("fade-out");

    headerLinks.classList.add("hide-for-mobile");
    headerLinks.classList.remove("fade-in");
    headerLinks.classList.add("fade-out");
  } else {
    //open menu
    header.classList.add("open");

    overlay.classList.remove("fade-out");
    overlay.classList.add("fade-in");

    headerLinks.classList.remove("hide-for-mobile");
    headerLinks.classList.remove("fade-out");
    headerLinks.classList.add("fade-in");
  }
});
