const nav = document.querySelector("#lista--menu");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const header = document.querySelector("#header");
abrir.addEventListener("click", () => {
    nav.classList.add("mostrar-menu");
    abrir.classList.add("ocultar-boton");
});

cerrar.addEventListener("click", () => {
    nav.classList.remove("mostrar-menu");
    abrir.classList.remove("ocultar-boton");
});

window.addEventListener("scroll", function () {
    header.classList.add("header-scrolled", window.scrollY > 0);
    if(this.window.scrollY == 0)
    header.classList.remove("header-scrolled");
});

// Obtener todas las tarjetas
var cards = document.querySelectorAll('.card');

// Iterar sobre cada tarjeta
cards.forEach(function(card) {
  // Agregar un evento de clic a cada tarjeta
  card.addEventListener('click', function() {
    // Alternar la clase "clicked" en la tarjeta
    card.classList.toggle('clicked');
  });
});
