//------------------------------Ejercicio 4-----------------
function pares(x) {
  var suma = 0;
  for (var i = 1; i <= 2000; i = i++) {
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
  for (var i = 1; i <= 2000; i = i ++) {
    if (i % 2 == 0) {
      document.write(i + "<br>");
      suma += i;
    }
  }
};