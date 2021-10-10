const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const BancoDeDaos = require('./BancoDeDados')

app.use(bodyParser.urlencoded({ extended: true}))

app.get('/produtos', (req, res, next)=>{
    res.send(BancoDeDaos.getProdutos())
})

app.get('/produtos/:id',(req, res, next)=>{
    res.send(BancoDeDaos.getProduto(req.params.id))
})

app.post('/produtos',(req, res, next)=>{
    const produto = BancoDeDaos.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})


app.put('/produtos/:id',(req, res, next)=>{
    const produto = BancoDeDaos.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

app.delete('/produtos/:id',(req, res, next)=>{
    const produto = BancoDeDaos.excluirProduto(req.params.id )
    res.send(produto)
})

app.listen(porta, () =>{
    console.log(`Servidor executando na porta ${porta}.`)
})


//http://localhost:3003/produtos
