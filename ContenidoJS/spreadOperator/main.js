'use strict';
/* SO ... Operador de propagacion*/

const myArray = [1, 2, 3, 4, true,3.56, 'Mariana',800, '2'];

let myArray2 = new Array('a','e','i','o','u'); // Objetos

myArray.push(300,677); //

//let result = myArray.concat(myArray2);
let result= [...myArray,...myArray2, 78, 9.045];

console.log(...myArray)

for (let i of myArray) {
//console.log(i);
}

function print(param1,param2=0,param3=0) {
    console.log('esto es una impresion de parametros: ${param1} ${param2} ${...param3}'); 
}
   // print("felix","ruiz",22);


//myArray2.forEach(e => { 
//    console.log(e);
//});

print(...myArray);
