'use strict';
if (num3>num4){
    console.log("entre");
}else{
    if(num2 % 5 ===0){
        console.log("multiplo de 5");
    }
}
//condicional ternario
let respuesta = (num4>=100) ?"num 4 es mayor a 10" : "num 4 no es mayor a 10";
console.log(respuesta);

//switch

let opcion = 4;  //1 a 5

switch (opcion){
    case 1:
    console.log("opcion 1"); break;
    case 2: 
    console.log("opcion 2"); break;
    case 3:
    console.log("opcion 3"); break;
    case 4:
    console.log("opcion 4"); break;

    fefault:
    console.log("opcion fuera de rango");
}
switch (true){
    case 1: num1>= 0 && opcion <3;
    console.log("esta aplazado");
     break;
    case 2: num1>=3 && opcion <=5;
    console.log("esta aprobado");
     break;
    case 3:
    console.log("operacion fuera de rango");
     break;

}