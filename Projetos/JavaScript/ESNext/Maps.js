const tecnos = new Map()
tecnos.set('react', {framework: false})
tecnos.set('angular', {framework : true})

console.log(tecnos.react)
console.log(tecnos.get('react').framework)

const chavesVariadas = new Map([
    [function () {  }, 'Função'],
    [{}, 'Objeto'],
    [123, "Numero"],
])

chavesVariadas.forEach((vl, ch) =>{
    console.log(ch, vl)
})

console.log(chavesVariadas.has(123))
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)