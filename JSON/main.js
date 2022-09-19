'use strict';

let cadJSON = {"nombres": "Juan Andres"};
//[] -> arreglo , {} -> objeto

let datos = [

    {
        "nombres": "Juan Andres",
        "apellidos": "Vargas Solanos",
        "edad": 34,
        "materias": ["logica","Programacion", "matematicas"],
        "soltero": true,
    },
    {
        "nombres": "Mario Andres",
        "apellidos": "Marques",
        "edad": 19,
        "materias": ["logica","Programacion", "matematicas"],
        "soltero": true,
    }

];

Object.entries(datos).forEach((e) => console.log(e));