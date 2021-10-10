const Pessoa = function(nome){
    return{
    nome: () =>  
        console.log(`Meu nome é ${nome}`)
    }
}

const p1 = Pessoa("João")
p1.nome()
console.log(p1.nome)

// Solução

function Pessoa2 (nome1){
     this.nome1 = nome1
    this.falar = function(){
        console.log(`Meu nome é ${this.nome1}`)
    }
}

const p2 = new Pessoa2 ("João")
p2.falar()