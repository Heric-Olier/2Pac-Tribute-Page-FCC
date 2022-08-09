const navBurguer = document.querySelector(".nav__burguer");
const navMenu = document.querySelector(".nav__menu");
const navMenuItems = document.querySelectorAll(".nav__menu ul li");
const offCanvasDelay = document.querySelector(".off__canvas-overlay");
const navBurguerLine1 = document.querySelector(".nav__burguer-line-1");
const navBurguerLine2 = document.querySelector(".nav__burguer-line-2");
const navBurguerLine3 = document.querySelector(".nav__burguer-line-3");
const iconParallaxOne = document.querySelector(".icon__float-1");
const iconParallaxTwo = document.querySelector(".icon__float-2");
const iconParallaxThree = document.querySelector(".icon__float-3");
const topButton = document.querySelector(".top__button");

//*!--------------- Burguer Menu ---------------*//

const showNav = () => {
  navMenu.classList.toggle("active");
  navBurguerLine1.classList.toggle("active");
  navBurguerLine2.classList.toggle("active");
  navBurguerLine3.classList.toggle("active");
  navBurguer.classList.toggle("active");
  offCanvasDelay.classList.toggle("active");
};

// El menu se muestra y se oculta con un click en el icono de hamburguesa
navBurguer.addEventListener("click", () => {
  showNav();
});

// El menú se cierra al hacer click fuera del mismo
offCanvasDelay.addEventListener("click", () => {
  showNav();
});

// El menú se cierra al hacer click en un elemento del mismo
navMenuItems.forEach((item) => {
  item.addEventListener("click", () => {
    showNav();
  });
});

//*!--------------- scroll up & Top Button ---------------*//

// El botón de subir se muestra y se oculta con el scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    topButton.classList.add("active");
  } else {
    topButton.classList.remove("active");
  }
});

//*!--------------- Parallax ---------------*//

//movemos el objeto suavemente con el scroll
window.addEventListener("scroll", () => {
  let scrollPosition = window.scrollY;

  if (scrollPosition) {
    iconParallaxOne.style =
      "transform: translate3d(0px, " + scrollPosition * -0.17 + "px, 0px)";
    iconParallaxTwo.style =
      "transform: translate3d(0px, " + scrollPosition * -0.06 + "px, 0px)";
    iconParallaxThree.style =
      "transform: translate3d(0px, " + scrollPosition * -0.045 + "px, 0px)";
  }
});
