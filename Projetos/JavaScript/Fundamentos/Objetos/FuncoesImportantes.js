const pessoa ={
    nome:'Rebeca',
    idade:2,
    peso: 22,
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}:${valor}`)
    
})

Object.defineProperty(pessoa, 'dataNascimento',{
    enumerable: false, // mude pra true pra aparecer
    writable: false,
    value: '01/01/2019'
})
pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))


// Object.assign (ECMAScript 2015)
const destino ={a: 1}
const obj1 = {b: 2}
const obj2 = {c: 3, a: 4}
const obj = Object.assign(destino, obj1, obj2)

Object.freeze(obj)
obj.c = 1234
console.log(obj)
