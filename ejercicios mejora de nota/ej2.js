//------------------------------Ejercicio 2-----------------
function pares(x) {
  var suma = 0;
  for (var i = 11; i <= 100; i = i++) {
    if (i % 2 == 0) {
      document.write(i + "<br>");
      suma += i;
    }
  }
  return suma;
}
console.log(pares(40));
//------------------------------Tipo flecha----------------
var paresf = function paresf() {
  for (var i = 1; i <= 100; i = i + 2) {
    if (i % 2 == 0) {
      document.write(i + "<br>");
      suma += i;
    }
  }
};