function maiorOuMenor(num1, num2){
    if (num1 > num2){
        return "Numero " + num1 + " é maior que o " + num2;
    } else if(num1 < num2){
        return "Numero " + num1 + " é menor que o " + num2;
    } else {
        return "Numeros iguais!";
    }
}

console.log(maiorOuMenor(1, 3))
console.log(maiorOuMenor(8, 3))
console.log(maiorOuMenor(10, 10))