const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const apenasF = f => f.genero == 'F'
const apenasChina = f => f.pais == 'China'
const apenasSalario = (func, funcAtual) =>{
    return func.salario > funcAtual .salario ? func : funcAtual
}

axios.get(url).then(response =>{
    const funcionarios = response.data

    const func = funcionarios
    .filter(apenasChina)
    .filter(apenasF)
    .reduce(apenasSalario)
    console.log(func)
})


