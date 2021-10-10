const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')


const contadorC = require('./instanciaNova')()
const contadord = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorB.valor)

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadord.valor)