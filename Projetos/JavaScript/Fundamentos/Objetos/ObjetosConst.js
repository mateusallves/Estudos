// pessoa => 123 => {...}
const pessoa = { nome: ' João'}
pessoa.nome = 'Pedro'
console.log(pessoa.nome)

// pessoa => 456 => {...}
// pessoa = {nome : 'Ana"}

Object.freeze(pessoa)
pessoa.nome = 'Maria'
delete pessoa.nome
console.log(pessoa.nome)

const pessoaConstante = Object.freeze({nome : 'João'})
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante.nome)