const nomes = ['Johnny', 'Edgar Marques', 'Alyson']

console.log(nomes[0]);
nomes[0] = 'Ester'
console.log(nomes[0]);

const notas = [4, 2, 6, 7, 5, 'johnny', false];

console.log(notas);

//usando loop com array
for (let i = 0; i < 3; i++) {
  console.log(nomes[i]);
}

//push
console.log(nomes.push('Vituriano'));
console.log(nomes);
//unShift
console.log(nomes.unshift('Johnny'));
console.log(nomes);
//splice
console.log(nomes.splice(1, 0, 'Ricardo'));
console.log(nomes);

console.log(nomes.splice(2, 1, 'Vinicius'));
console.log(nomes);

console.log(nomes.splice(4, 1));
console.log(nomes);
//pop (retorna o removido)
console.log(nomes.pop());
console.log(nomes);
//shift
console.log(nomes.shift());
console.log(nomes)
//toString
console.log(nomes.toString());
//join
console.log(nomes.join('/'));
const texto = nomes.join('/');
console.log(texto);
//split
console.log('Ricardo/Vinicius/Daniel/Samuel/Vituriano'.split('/'));
//concat
const maisNomes = ['Ayanne', 'Ingrid', 'Xavier']
console.log(nomes.concat(maisNomes));
// destructuring
const array = ['Johnny', 'Herbert', 21, '27/05/1999']
let [nome, sobrenome] = array;
console.log(nome);
console.log(sobrenome);
let [nome2,,idade] = array;
console.log(nome2);
console.log(idade);
let [,,idade2, dataNascimento] = array;
console.log(idade2);
console.log(dataNascimento);
//spread
let [,,...resto] = array;
console.log(resto);