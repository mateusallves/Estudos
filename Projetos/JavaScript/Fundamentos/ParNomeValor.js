// par nome/valor
const saudacao = 'olá'  // contexto léxico 1
function exec(){
    const saudacao = "faaala" //contexto léxico 2
    return saudacao
}

//objetos são grupo aninhados de pares nome/valor
 const client = {
      nome :'Pedro',
      idade : 31,
      peso: 80,
      endereco: {
          logadouro: 'Rua Muito Legal',
          numero: 123,
      }
 }
 
 console.log(saudacao)
 console.log(exec())
 console.log(client)