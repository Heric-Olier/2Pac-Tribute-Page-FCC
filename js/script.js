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