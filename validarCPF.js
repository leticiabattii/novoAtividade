function calculoloop(contador, cpfsodigitos){
    let soma = 0
    for (i=contador; i>1; i--){
        soma += cpfsodigitos[contador-i] * i
    }
    let resultado = soma%11

    if(
        (resultado<2 && cpfsodigitos[contador -1]!=0)
        || (resultado >= 2 && cpfsodigitos [contador - 1]!= 11 - resultado)
    ){
        return false
    }
    return true
}

function verificarCPF (cpf){
    let cpfsodigitos = cpf.replaceAll('.',''). replaceAll('-','').split('')
    if (cpfsodigitos.length != 11){
        return 'CPF Inválido'
    }
    let resposta = calculoloop(10, cpfsodigitos)
    if(!resposta){
        return 'CPF inválido'
    }
    let resposta2 = calculoloop(11, cpfsodigitos)
    if(!resposta2){
        return 'CPF inválido'
    }

    return 'CPF Válido'

}
let cpf = '202.393.444-32'
let cpf2 = '897.546.987-23'
console.log (verificarCPF(cpf))
console.log (verificarCPF(cpf2))
