// Object.preventExtensions
const produto = Object.preventExtensions({
    nome :'Qualquer', preco : 1.99, tag:'promoção'
})

console.log('Extensivel: ', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'borracha qualquer coisa'
delete produto.tag 
console.log(produto)

const pessoa = {nome:'Juliana', idade: 34}
Object.seal(pessoa)
console.log('Selado', Object.isSealed(pessoa))

pessoa.sobrenome = "Silva"
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

//Object.freeze = Obj.seal + sem modificações