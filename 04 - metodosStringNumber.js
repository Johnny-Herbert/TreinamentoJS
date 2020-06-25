/* String */
const nomeDev = 'Johnny'
const nomeTech = 'Edgar Marques'

//concatenação
console.log('Johnny' + ' ' + 'Herbert');
console.log(nomeDev.concat(' ', 'Herbert'));
//conversão
console.log(parseInt('1') + 2);
console.log(+'1' + 2);
//length
console.log(nomeDev.length);
console.log(nomeTech.length);
//indexOf
console.log(nomeTech.indexOf('a'));
console.log(nomeTech.indexOf('j'));
//charAt
console.log(nomeDev.charAt(1));
//slice
console.log(nomeDev.slice(0, 4));
console.log(nomeTech.slice(6));
//substring (index)
console.log(nomeDev.substring(0, 4));
//substr (quantidade)
console.log(nomeTech.substr(6, 7));
//Upper e Lower
console.log(nomeDev.toUpperCase());
console.log(nomeTech.toLowerCase());
//replace
console.log(nomeTech.replace('Marques', 'Nunes'));
//Trim
console.log("         CITi           ".trim());




/* Number */
const nota = 7;
const media = 7.4;

//Conversão
console.log(nota.toString());
//toFixed (retorna uma string)
console.log(nota.toFixed(2));
//toPrecision (retorna uma string)
console.log(media.toPrecision(2));
//max e min
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
//isInteger
console.log(Number.isInteger(nota));
console.log(Number.isInteger(media));
//infinit


