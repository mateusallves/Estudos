Array.prototype.forEach2 = function(callback){
    for (let i = 0; i < this.length; i++){
        callback(this[i],i, this)
    }
}

const provados = ['Agatha', 'Aldo','Daniel', 'Raque']

provados.forEach2(function(name, indice){
    console.log(`${indice+1}) ${name}`)
})