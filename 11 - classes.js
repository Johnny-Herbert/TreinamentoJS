class Pessoa {
  constructor(idade, altura) {
    this.posicao = [0, 0];
    this.idade = idade;
    this.altura = altura;
  }

  andar() {
    this.posicao[0] += 1;
    console.log(this.posicao);
  }

  aniversario() {
    this.idade += 1;
    this.altura += 0.1;
  }

  cumprimentar() {
    console.log('Olá!');
  }
}


const Joao = new Pessoa(17, 1.7);

Joao.andar();

console.log(Joao.posicao); // [1, 0]

Joao.aniversario();

console.log(Joao.idade); // 18
console.log(Joao.altura); // 1.8

Joao.cumprimentar(); // Olá!