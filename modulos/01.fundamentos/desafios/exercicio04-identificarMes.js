function identificarMes(mes) {
    switch (mes) {
        case 1: return 'Janeiro'
        case 2: return 'Fevereiro'
        case 3: return 'Marco'
        case 4: return 'Abril'
        case 5: return 'Maio'
        case 6: return 'Junho'
        case 7: return 'Julho'
        case 8: return 'Agosto'
        case 9: return 'Setembro'
        case 10: return 'Outubro'
        case 11: return 'Novembro'
        case 12: return 'Dezembro'

        default: return 'Mês inválido'

}

    
}

console.log(identificarMes(13))
console.log(identificarMes(1))

