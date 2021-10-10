const valores =[7,7.5,2.7,0.757,6.37,7.6,7.3]
console.log(valores[0], valores[3])
console.log(valores[4]) //sempre gera undefined

valores[4]= 10 //adiciona o elementos
console.log(valores)
console.log(valores.length) //Ver o tamanho do Array

valores.push({id :3}, false, null, 'teste')
console.log(valores)

console.log(valores.pop())
delete valores[0]
console.log(valores)

console.log(typeof valores)