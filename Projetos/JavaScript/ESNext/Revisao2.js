// Arrow function
const soma = (a, b) => a + b
console.log(2, 3)

// Arrow Function (THIS)

const lexico1= () =>console.log(this===exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2

// Parametro default
function log(texto = 'Node'){
    console.log(texto)
}



// Operador rest
function total (...numeros){
    let total = 0 
    numeros.forEach(n=> total += n)
    return total
}
console.log(total)
