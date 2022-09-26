//--------------------------------Ejercicio 10--------------------------------------------------------
function promedioedad(){
    var edad = parseInt(prompt("Ingrese la cantidad de estudiantes: "));
    var suma = 0;
    var promedio = 0;
    for(let i = 0; i < edad ;i++){
        var edades = parseInt(prompt("Digite la edad del estudiante " + i));
        suma = suma + edades;
    };
    promedio = suma / edad;
    alert ("El promedio de la edad de los estudiantes es: " + promedio);

};
promedioedad();
//----------------------------------tipo flecha -----------------------------------
const promedioEdad = () =>{
    var edad = parseInt(prompt("Ingrese la cantidad de estudiantes: "));
    var suma = 0;
    var promedio = 0;
    for(let i = 0; i < edad ;i++){
        var edades = parseInt(prompt("Digite la edad del estudiante " + i));
        suma = suma + edades;
    };
    promedio = suma / edad;
    alert ("El promedio de la edad de los estudiantes es: " + promedio);

};
promedioEdad();