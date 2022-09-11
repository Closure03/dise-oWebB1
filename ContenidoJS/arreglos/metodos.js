'use strict';
let cadena = 'enero-febrero-marzo-abril-mayo-junio-julio';
//metodo split
let resultArray = cadena.split('-');
console.log(resultArray);
//metodo find

const myArray = [1, 2, 3, 4, true,3.56, 'Mariana',800, '2'];

let result = myArray.find((e) => e === true);
//console.log(result);
// metodo findIndex
result= myArray.findIndex((e) => e === 'mariana');
// metodo filter
result= myArray.filter((e) => e  %2 === 0);

console.log(result);