function funcionaOuNao(valor, chanceErro){
    return new Promise((resolve, reject)=>{
        if(Math.random()< chanceErro){
            reject('Errou Marreco')
        } else {
            resolve(valor)
        }
    })
}

funcionaOuNao('Testando...', 0.5)
    .then(v =>console.log(`Valor : ${v}`))
    .catch(err => console.log(`Ta achando oque: ${err}`))
    .then(()=> console.log('fim'))