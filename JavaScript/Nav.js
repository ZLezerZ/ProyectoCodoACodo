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