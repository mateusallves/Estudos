const alunos = [
    {nome:'João', nota : 7.3, bolsita: false},
    {nome:'Maria', nota : 9.2, bolsita: true},
    {nome:'Pedro', nota : 9.8, bolsita: false},
    {nome:'Ana', nota : 8.7, bolsita: true}
]

//São todos bolsistas?

const todosBolsistas = (resultado, bolsita) => resultado && bolsita
console.log(alunos.map(a=> a.bolsita).reduce(todosBolsistas))

// Tem algums bolsista?

const algumBolsista = (resultado, bolsita) => resultado || bolsita
console.log(alunos.map(a=> a.bolsita).reduce(algumBolsista))