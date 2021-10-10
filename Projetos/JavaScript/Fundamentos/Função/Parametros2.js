// estratégia de gerar valor padrão
function soma1(a, b, c) {
    a = a || 1
    b = b || 2
    c = c || 1
    return a + b + c
}
console.log(soma1())

//estratégia 2,3,4 para gerar valor padrão

function soma2 (a, b, c){
    a = a!== undefined ? a :1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c
    return a + b + c
}
console.log(soam2())

//valor padrçao de ES 2015
function soma3(a=1, b= 1, c = 1){
    return a + b + c
}
console.log(soma3())
