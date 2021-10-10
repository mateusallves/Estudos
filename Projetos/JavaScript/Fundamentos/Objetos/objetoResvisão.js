// coleção dinamica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto '] = ' Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['maca do produto']
console.log(produto)

const carro = {
    modelo : 'A4',
    calor : 89990,
    proprietario:{
        nome: 'Raul',
        Idade:56,
        endereco :{
            logradouro : ' rua ABC',
            numero :231
        }
    },
    condutores : [{
        nome: 'Junior',
    },{
        nome :'Ana',
        idade: 22
    }],
    calcularValorSeguro : function(){
        //EXEMPLO
    }
}
carro.proprietario.endereco.numero = 1000
console.log(carro)

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.condutores)
console.log(carro.condutores.length)// Dá problema 