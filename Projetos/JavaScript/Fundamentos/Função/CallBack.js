const frabricante = [ 'mercedes', 'Audi', "BMW"]

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}

frabricante.forEach(imprimir)
frabricante.forEach(function(a){
    console.log(a)
})