 // Armazenando funções em variaveis
 const imprimirSoma = function(a, b){
       console.log(a+b)   
 }

  imprimirSoma(2,3)
   // Armazenando função Arrow em uma variavel

   const soma = (a,b) => {
       return a+b
   }

   console.log(soma(2,3))

   // return implicito
   const subtracao = (a,b) => a - b
   console.log(subtracao(2,3))