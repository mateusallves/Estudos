function produto(nome, preco){
    return {
        nome,
        preco,
        desconto: 0.1
    }
}
console.log(produto('abacaxi',7.99))