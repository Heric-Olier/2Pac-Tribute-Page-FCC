let navBurguer = document.querySelector(".nav__burguer");
let navMenu = document.querySelector(".nav__menu");
let navMenuItems = document.querySelectorAll(".nav__menu ul li");
let navClose = document.querySelector(".nav__close");


navBurguer.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  navBurguer.classList.toggle("active");
});

navClose.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  navBurguer.classList.toggle("active");
});


navMenuItems.forEach(item => {
  item.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    navBurguer.classList.toggle("active");
  });
});


//*! scroll up *//
let topButton = document.querySelector(".top__button");
let scrollUp = document.querySelector(".scroll-up");


window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    topButton.classList.add("active");
  } else {
    topButton.classList.remove("active");
  }
});