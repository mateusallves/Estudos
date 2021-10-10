class Lancamento{
    constructor(nome= 'Genérico', valor = 0){
        this.nome = nome
        this.valor = valor
    }
}

class clicloFinanceiro{
    constructor(Mes, ano){
        this.Mes = Mes
        this.ano = ano
        this.lancamentos = []
    }
    addLancamentos(...lancamentos){
        lancamentos.forEach(l => this.lancamentos.push(l))
    }
    sumarios(){
        let valorConsolidado = 0
        this.lancamentos.forEach(l=>{
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('Salario', 45000)
const contaDeLuz = new Lancamento('Luz', -2200)

const contas = new clicloFinanceiro(6, 2020)
contas.addLancamentos(salario, contaDeLuz) 
console.log(contas.sumarios())

