const pessoa = {
    nome: "ana",
    idade: 15,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1001,
    }
}


const { nome, idade } = pessoa
console.log(nome, idade)

const {nome: n, idade: i} = pessoa
console.log(n, i)

const{Sobrenome, bemHumorada}= pessoa
console.log(Sobrenome, bemHumorada)

const{endereco:{logradouro, numero, cep}}= pessoa
console.log(logradouro, numero, cep)