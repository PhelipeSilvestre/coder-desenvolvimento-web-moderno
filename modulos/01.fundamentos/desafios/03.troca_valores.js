// Crie duas variaveis e troque o valor entre elas

let a = 10;
let b = 25;
let aux = a; // variavel utilizada para armazenar o valor da variavel A
console.log("antes da troca a variaveis possuem esses valores: A = " + a + " e B = " + b);

a = b;
b = aux;

console.log("depois da troca a variaveis possuem esses valores: A = " + a + " e B = " + b);