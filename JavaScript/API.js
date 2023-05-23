const axios = window.axios;
const urlUSD ='https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/ars.json';
const urlEUR ='https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/ars.json';

axios.get(urlUSD)
.then(response => {
    const cambioUSD = response.data.ars.toFixed(2); //ponemos el toFixed para acortar a solo 2 decimales la respuesta
    document.getElementById(`tipo-cambio-usd`).textContent = `1USD: ${cambioUSD}ARS`;
})
.catch(error => {
    console.log(error);
});

axios.get(urlEUR)
.then(response => {
    const cambioEUR = response.data.ars.toFixed(2);
    document.getElementById(`tipo-cambio-eur`).textContent = `1EUR: ${cambioEUR}ARS`;
});
//Para el botón de la API
const btnToggle  = document.getElementById('boton-tipo-cambio');
const infoCambio = document.getElementById('contenedor__tipo-cambio');

btnToggle.addEventListener('click', function(){
    if(infoCambio.style.display === 'none'){
        infoCambio.style.display = 'flex';
    }else{
        infoCambio.style.display = 'none';
    }
});