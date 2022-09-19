//capturar los botones
const btnRojo= document.getElementById("rojo");
const btnMarron = document.getElementById("marron");
const btnAzul = document.getElementById("azul");
const btnBorrar = document.getElementById("borrar");
const fondo = localStorage.getItem("backgroundColor");
//Generar los eventos de los botones
btnRojo.addEventListener("click", ()=>{
    console.log("rojo");
    localStorage.setItem("backgroundColor", "red");
    document.body.style.backgroundColor = "red";
});
btnMarron.addEventListener("click", ()=>{
    console.log("marron");
    localStorage.setItem("backgroundColor", "brown");
    document.body.style.backgroundColor = "brown";
});
btnAzul.addEventListener("click", ()=>{
    console.log("azul");
    localStorage.setItem("backgroundColor", "blue");
    document.body.style.backgroundColor = "blue";
});
btnBorrar.addEventListener("click", ()=>{
    console.log("borrar");
    localStorage.removeItem("backgroundColor");
    document.body.style.backgroundColor = "white";
});