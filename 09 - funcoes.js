//função
function soma(a, b) {
  return a + b;
}

let resultado = soma(1, 4);
console.log(resultado);

function somaArray(numeros) {
  let resultado = 0;
  for (let i = 0; i < numeros.length; i++) {
    resultado += numeros[i];
  }
  return resultado;
}

const numeros = [1, 3, 5, 1];

resultado = somaArray(numeros);
console.log(resultado);

//função recursiva

function fatorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  else {
    return n * fatorial(n - 1);
  }
}

console.log(fatorial(5));

//Arrow function
const somaArray2 = (numeros) => {
  let resultado = 0;
  for (let i = 0; i < numeros.length; i++) {
    resultado += numeros[i];
  }
  return resultado;
}

console.log(somaArray2(numeros));