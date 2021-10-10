let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)

console.log('os verdadeiros...') //todos os prints abaixo
console.log(!!3)
console.log(!!-1)
console.log(!![])
console.log(!!{})
console.log(!!'')
console.log(!!Infinity)
console.log(!!(isAtivo=true))
// 
console.log('os falsos...') //todos abaixos são falsos
console.log(!!0)
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo=false))

console.log('FINALIZANDO')