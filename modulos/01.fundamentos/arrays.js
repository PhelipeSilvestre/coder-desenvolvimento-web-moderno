const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)

// metodo .length() retorna o tamanho do Array
console.log(valores.length)

// Em js é possivel adicionar varios tipos dentro do mesmo Array: objetos, boolean, null, string, int etc
// metodo .push() adiciona um elemento
valores.push({id: 3}, false, null, 'teste')
console.log(valores)

// metodo .pop() remove um elemento
console.log(valores.pop())
delete valores[0]
console.log(valores)

// metodo typeof valor verifica o valor do elemento
console.log(typeof valores)
