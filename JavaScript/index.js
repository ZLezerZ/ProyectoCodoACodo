
var arrayCarrusel = document.querySelectorAll('.imagenes__carrusel img');
var arrayPuntos = document.querySelectorAll('.punto');

arrayPuntos.forEach((punto, index) => {
    punto.addEventListener('click', () => {
        arrayPuntos.forEach(punto => {
            punto.classList.remove('activo')
        });
        punto.classList.add('activo');
        mostrarImagen(index);
    });
});

function mostrarImagen(index) {
    desplazar = index * -100;

    console.log(`El dezplazamiento es de : ${desplazar}`);
    
    for (var i = 0; i < arrayCarrusel.length; i++) {
        arrayCarrusel[i].style.transform = `translateX(${desplazar}%)`;;
    }
}

