let num1 = 5;
let num2 = 3;
const nome = 'johnny'

if (num1 > num2) {
  console.log('É maiorrr');
}
else if (num1 < num2) {
  console.log('É menorrrr');
}
else {
  console.log('É iguallll');
}

//ternário
const maior = (num1 > num2) ? num1 : num2; // assumir que os números são diferentes
console.log(maior);


//switch
let posicao = 5;

switch (posicao) {
  case 1:
    console.log('Primeiro lugar');
    break;
  case 2:
    console.log('Segundo lugar');
    break;
  case 3:
    console.log('Terceiro lugar');
    break
  default:
    console.log("Fora do pódio");
    break;
}

//Smart switch
const a = 'test';

switch (a) {
  case 'test':
    console.log('This is a test');
    break;

  case 'warn':
    console.log('This is a warning!!');
    break;

  case 'alert':
    console.log('This is an alert!!!!!');
    break;

  default:
    break;
}


const smartSwitch = {
  test: 'This is a test',
  warn: 'This is a warning!!',
  alert: 'This is an alert!!!!!',
};

console.log(smartSwitch[a]);