//------------------------------Ejercicio 6-----------------

const number = parseInt(prompt('Ingrese un numero positivo: '));
let n1 = 0, n2 = 1, nextTerm;

console.log('Serie Fibonacci:');
console.log(n1); // escribe 0
console.log(n2); // escribe 1

nextTerm = n1 + n2;

while (nextTerm <= number) {

    // imprime el siguiente periodo
    console.log(nextTerm);

    n1 = n2;
    n2 = nextTerm;
    nextTerm = n1 + n2;
}
//------------------------------Tipo flecha----------------
const fibonacci = n => {
  let a = 0, b = 1, c = n;
  
  for(let i = 2; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  
  return c;
};