let navBurguer = document.querySelector(".nav__burguer");
let navMenu = document.querySelector(".nav__menu");
let navMenuItems = document.querySelectorAll(".nav__menu ul li");
let offCanvasDelay = document.querySelector(".off__canvas-overlay");
let navBurguerLine1 = document.querySelector(".nav__burguer-line-1");
let navBurguerLine2 = document.querySelector(".nav__burguer-line-2");
let navBurguerLine3 = document.querySelector(".nav__burguer-line-3");

//*!--------------- Burguer Menu ---------------*//

// El menu se muestra y se oculta con un click en el icono de hamburguesa

navBurguer.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  navBurguerLine1.classList.toggle("active");
  navBurguerLine2.classList.toggle("active");
  navBurguerLine3.classList.toggle("active");
  navBurguer.classList.toggle("active");
  offCanvasDelay.classList.toggle("active");
});

// El menú se cierra al hacer click fuera del mismo

offCanvasDelay.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  navBurguerLine1.classList.toggle("active");
  navBurguerLine2.classList.toggle("active");
  navBurguerLine3.classList.toggle("active");
  navBurguer.classList.toggle("active");
  offCanvasDelay.classList.toggle("active");
});

// El menú se cierra al hacer click en un elemento del mismo

navMenuItems.forEach((item) => {
  item.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    navBurguerLine1.classList.toggle("active");
    navBurguerLine2.classList.toggle("active");
    navBurguerLine3.classList.toggle("active");
    navBurguer.classList.toggle("active");
    offCanvasDelay.classList.toggle("active");
  });
});

//*!--------------- scroll up & Top Button ---------------*//

let topButton = document.querySelector(".top__button");

// El botón de subir se muestra y se oculta con el scroll

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    topButton.classList.add("active");
  } else {
    topButton.classList.remove("active");
  }
});

// mover objetos con el scroll

//*!--------------- Parallax ---------------*//

let iconParallaxOne = document.querySelector(".icon__float-1");
let iconParallaxTwo = document.querySelector(".icon__float-2");
let iconParallaxThree = document.querySelector(".icon__float-3");

//movemos el objeto suavemente con el scroll
window.addEventListener("scroll", () => {
  let scrollPosition = window.scrollY;
  // iconParallaxOne.style.top = scrollPosition * -0.5 + "px";

  if (scrollPosition) {
    iconParallaxOne.style =
      "transform: translate3d(0px, " + scrollPosition * -0.17 + "px, 0px)";
    iconParallaxTwo.style =
      "transform: translate3d(0px, " + scrollPosition * -0.06 + "px, 0px)";
    iconParallaxThree.style =
      "transform: translate3d(0px, " + scrollPosition * -0.045 + "px, 0px)";
  }
});
