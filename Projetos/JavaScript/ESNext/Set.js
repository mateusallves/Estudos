// Não aceita REpetição e não é INDEXADA
const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('palmeiras').add('Cori')
times.add('Fla')
times.add('Vasco')

console.log(times)
console.log(times.size)
console.log(times.has('vasco'))
console.log(times.has('Vasco'))
times.delete('Fla')
console.log(times.has('Fla'))

const nome = [ 'Raquel', 'Lucas', 'Julia', 'Lucas']
const nomeSet = new Set(nome)
console.log(nomeSet)