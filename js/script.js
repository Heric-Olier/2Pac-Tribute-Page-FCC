let navBurguer = document.querySelector(".nav__burguer");
let navMenu = document.querySelector(".nav__menu");
let navMenuItems = document.querySelectorAll(".nav__menu ul li");
let navClose = document.querySelector(".nav__close");
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

// // El menú se cierra al hacer clicck en el botón de cerrar

// navClose.addEventListener("click", () => {
//   navMenu.classList.toggle("active");
//   navBurguer.classList.toggle("active");
//   offCanvasDelay.classList.toggle("active");
// });

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
let scrollUp = document.querySelector(".scroll-up");

// El botón de subir se muestra y se oculta con el scroll

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    topButton.classList.add("active");
  } else {
    topButton.classList.remove("active");
  }
});
