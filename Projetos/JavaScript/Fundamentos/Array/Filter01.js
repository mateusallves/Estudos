const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome:'Copo de Vidro', preco: 12.49, fragil: true},
    {nome:'Copo de Plástico', preco: 18.99, fragil: false}
]

 const precoCaro = produtos => produtos.preco >= 500
 const objFragil = produtos => produtos.fragil == true


 console.log(produtos.filter(precoCaro).filter(objFragil))
