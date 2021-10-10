function compras (trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    //const comprarTv32 = !!(trabalho1 ^ trabalho2) //
    const comprarTv32 = trabalho1 != trabalho2 //
    const ficarSaudadavel = !comprarSorvete
    
    return{ comprarSorvete, comprarTv32, comprarTv50, ficarSaudadavel}
 }

 console.log(compras(true, true))