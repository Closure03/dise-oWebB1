'use strict';

//Objeto literal de JS

let myObject = {
    nombres : 'felix',
    apellidos : 'Ruiz',
    edad: 18,
    genero:  'masculino',
}
console.log(myObject.apellidos);
myObject.apellidos = "sosa";
//console.log(myObject);  
//iterar objeto
//Object.entries(myObject).forEach((e) => console.log(e));
//Object.entries(myObject).forEach(([key, value]) => console.log(key));
Object.values(myObject).forEach((key) => console.log(key));
