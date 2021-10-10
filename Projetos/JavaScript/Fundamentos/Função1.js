//Funçao sem retorno
function imprimirSoma(a, b) {
    console.log(a+b)
    
}
imprimirSoma(2,3)
imprimirSoma(2) // O resultad dá NaN(Not a Number)
imprimirSoma(3, 10, 5, 6, 3, 4)
imprimirSoma() // o resultado é NaN
 
// Funcao com retorno
function soma(a, b =0){
    return a+b
}
 console.log(soma(2, 3))
 console.log(soma(2))
 console.log(soma())