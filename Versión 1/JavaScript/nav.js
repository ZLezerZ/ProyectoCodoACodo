const menu = document.querySelector("#lista--menu");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click",() => {
    menu.classList.add("lista--menu__visible")
    abrir.classList.add("ocultar-boton")
});

cerrar.addEventListener("click",() => {
    menu.classList.remove("lista--menu__visible")
    abrir.classList.remove("ocultar-boton")
});