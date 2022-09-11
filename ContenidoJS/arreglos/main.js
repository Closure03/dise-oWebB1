'use strict';
/*Declaracion de arreglos*/

const myArray = [1, 2, 3, 4, true,3.56, 'Mariana',800, '2'];

let myArray2 = new Array('a','e','i','o','u'); // Objetos

//console.log(myArray[6])
//console.log(myArray2[4])

/*Iteracion de arreglos*/
/* For in, For on, foreach
*/
for (let i of myArray) {
console.log(i);
}

for (let j of myArray) {
    console.log(myArray[j]);
}

for (let k =0; k < myArray.length; k++){
    console.log(myArray[k]);
}
myArray2.forEach(e => { 
    console.log(e);
});