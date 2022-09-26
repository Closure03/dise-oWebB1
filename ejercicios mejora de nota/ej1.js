//-------------------------Ejercicio 1---------------------
//-------------------------Funcion Normal------------------
//document.write(1 + "x " + i + "= " + i);

function multi() {

    num = document.getElementById("num").value;
    num = parseInt(num);

    for (var i = 1 /*inicializador*/ ; i <= 10 /* cantidad de veces a multiplicar*/ ; i++ /*incremento*/ ) {
        multi = num * i;
        document.write(num + "x" /*replicador del valor insertado*/ + i /*incremento */ + "=" + multi /*resultado*/ + "<br>");
    }
}

//------------------------------Tipo flecha----------------
let mult = (n = 5) => {
    //n = getElementById("n").value;
    //n = parseInt(n);
    var numero = document.getElementById("n").value;
    for (i = 1; i <= 10; i++) {
        mult = n * i;
        document.write(n + "x" + i + "=" + mult + "<br>");
    }
};

