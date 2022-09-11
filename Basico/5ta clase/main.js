'use strict'
const btn = document.getElementById('boton2'); //ambito

btn.addEventListener('click', (event) => {//2ndo parametro funcion tipo flecha anonima
    event.preventDefault();
    const form = document.getElementById('form');
    console.log(form[0].value);
    console.log(form[1].value);
    console.log(form[2].value);
    console.log(form[3].value);
});