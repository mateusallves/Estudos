const pilotos = ['Mateus', 'Pedro', 'Luiza', 'Massa']
pilotos.pop() // Remove o ultimo elemento do Array
console.log(pilotos)

pilotos.push('Pedrim')
console.log(pilotos)

pilotos.shift() // REMOVE o primeiro elemento do Array
console.log(pilotos)

pilotos.unshift('Miltim') // Adiciona Ao primeiro elemento do Array
console.log(pilotos)

//splice pode adcionar e remover elementos

//Adcionar
pilotos.splice(2,0, 'Botas', 'Massa')
console.log(pilotos)

//remover
pilotos.splice(3,1) // Massa quebrou de novo 
console.log(pilotos)

const algunsPilotos= pilotos.slice(2) // novo array
console.log(algunsPilotos)

const algunsPilotos2 = pilotos.slice(1,4)
console.log(algunsPilotos2)