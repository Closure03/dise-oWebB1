'use strict';
function generoEvento (){
alert('hizo click en el boton');
}
function eventoMouse (){
    console.log('Mouse');
}
//evento por propiedad
const bntpropiedad = document.getElementById('btnpropiedad');

btnpropiedad.onclick = function(){
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const promedio = document.getElementById('promedio').value;
    const tipo = document.getElementById('tipo').value;

    if (isNaN(parseFloat(promedio))){
        console.log(promedio);
    }


//Evento por el metodo addEventListener

const inputName = document.getElementById('nombre');

inputName.addEventListener('click',()=>{
    console.log(inputName.value))}
