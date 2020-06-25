const carro =  {
  marca: 'Honda',
  modelo: 'Honda Civic',
  placa: 'ABC1234',
  niv: '128931923Y217Y32Y1',
  cor: 'Vermelho',
  motor: '2.0',
  mudarMotor: function(valor) {
    this.motor = valor;
  },
}

//Acesso
console.log(carro.marca);
console.log(carro['marca']);
//chamando função
carro.mudarMotor('3.0');
console.log(carro.motor);

for (car in carro) {
  console.log(car);
}
//values
console.log(Object.values(carro));
//Keys
console.log(Object.keys(carro));
console.log(Object.entries(carro));
//entries
console.log(Object.entries(carro));
//destructuring
const { marca } = carro;
console.log(marca);
//Conditional Chaining Operator
