// Objetos em Js são um conjunto de chave - valor
const prod1 = {}

// é possivel adicionar atributos fora do objeto
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 // evitar atributos com espaço

console.log(prod1)

// É possivel adicionar objetos dentro de objetos
const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj3: {blabla: 1}
}

console.log(prod2)
