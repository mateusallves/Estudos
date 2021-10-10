const funcs = []

for (var i = 0 ; i <11; i++){
    funcs.push(function(){
        console.log(i)
    })
}
funcs[2]()
funcs[8]()
// O resultado pra ambas situações serão 10, que é o resultado final do loop