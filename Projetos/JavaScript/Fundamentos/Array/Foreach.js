const provados = ['Agatha', 'Aldo','Daniel', 'Raque']

provados.forEach(function(name, indice){
    console.log(`${indice+1}) ${name}`)
})

provados.forEach(name=> console.log(name))


const exibirAprovados = provados=> console.log(provados)
provados.forEach(exibirAprovados)