'use strict';
/*
contenedores


var var1 = 23; //ambito global
let var2 = 12; //ambito local
const VAR_1 = 19; //ambito global
var var1= 'holamundo'; //let var2 = 23;
console.log(var1,var2);
if(true){
    var var1=false;
}
console.log(var1);
//suma de dos numeros;
*/
let num1;
let num2;
suma=0; 
num1=parseFloat(prompt("introduzca un numero"));//cambiar la cadena a numero
num2=prompt("introduzca un numero");
suma = num1 + parseFloat(num2);
console.alert("la suma es: "+suma);