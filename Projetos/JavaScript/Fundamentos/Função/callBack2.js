const notas = [7.7,6.5,5,2,8.9,3,6,7.1,9.0]
//sem callback
let notasBaixas1 =[]
for (let i in notas){
    if (notas [i]< 7){
        notasBaixas1.push(notas[í])
    }
}

console.log(notasBaixas1)

// COM CALLBACK

const notasBaixas2 = notas.filter(function(nota){
    return nota<7
})
console.log(notasBaixas2)

const notasBaixas3 = notas.filter(notas => nota<7)
console.log(notasBaixas3)