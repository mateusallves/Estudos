// Funçao em JS é First-Class Object

// criar de fomar literal
function fun1(){ }

// Armazenar em uma variavel

const fun2 = function() {}

//armazenar em um Array
 
const array = [function(a,b){return a+b}, fun1, fun2]
console.log(array[0](2,3))

// Armazenar em um Atributo objeto
const obj= {}
obj.falar= function(){return 'opa'}
console.log(obj.falar)

//Passar funçao como parametro
function run(fun){
    fun()
}
run(function(){console.log('Executando...')})

//Uma função pode retornar/conter uma função

function soma(a,b){
    return function(c){
        console.log(a+b+c)
    }
}
soma(2,3)(4)