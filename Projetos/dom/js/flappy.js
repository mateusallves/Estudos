function newElemento(tagName, className){
    const elem = document.createElement(tagName)
    elem.className = className
    return elem
}

function barreira(reversa = false) {
    this.elemento = newElemento('div', 'barreira')

    const borda = newElemento('div','borda')
    const corpo = newElemento('div','corpo')
    this.elemento.appendChild(reversa? corpo : borda)
    this.elemento.appendChild(reversa? borda : corpo)


    this.setAltura = altura => corpo.style.height =`${altura}px`

}

function ParDeBarreiras(altura, abertura ,x){
    this.elemento = newElemento('div', 'par-de-barreira')

    this.superior = new barreira(true)
    this.inferior = new barreira(false)

    this.elemento.appendChild(this.superior.elemento)
    this.elemento.appendChild(this.inferior.elemento)

    this.sortearAbertura = () => {
        const alturaSuperior = Math.random() * (altura - abertura)
        const alturaInferior = altura - abertura - alturaSuperior
        this.superior.setAltura(alturaSuperior)
        this.inferior.setAltura(alturaInferior)
    }

    this.getX = () => parseInt(this.elemento.style.left.split('px')[0])
    this.setX = x => this.elemento.style.left = `${x}px`
    this.getLargura = () => this.elemento.clientWidth

    this.sortearAbertura()
    this.setX(x)
}

//const b = new ParDeBarreiras(700,200,400)
//document.querySelector('[wm-flappy]').appendChild(b.elemento)


function Barreiras(altura, largura, abertura, espaco, notificarPonto){
    this.pares =[
        new ParDeBarreiras(altura, abertura, largura),
        new ParDeBarreiras(altura, abertura, largura + espaco),
        new ParDeBarreiras(altura, abertura, largura + espaco * 2),
        new ParDeBarreiras(altura, abertura, largura + espaco * 3),
    ]

    const deslocamento = 3
    this.animar = () =>{
        this.pares.forEach(par =>{
            par.setX(par.getX() - deslocamento)

            // elemento fora da area

            if (par.getX() < -par.getLargura()){
                par.setX(par.getX() + espaco * this.pares.length)
                par.sortearAbertura()
            }

            const meio = largura / 2
            const cruzouOMeio = par.getX() + deslocamento >= meio&& par.getX() < meio

        if (cruzouOMeio) notificarPonto()
        })
    }
}
function Passaro(alturaJogo){ 
    let voando= false
    this.elemento = newElemento('img', 'passaro')
    this.elemento.src ='imgs/passaro.png'

    this.getY= () => parseInt(this.elemento.style.bottom.split('px') [0])
    this.setY = y => this.elemento.style.bottom = `${y}px`

    window.onkeydown = e => voando = true
    window.onkeyup = e => voando = false

    this.animar = () => {
        const novoY = this.getY() + (voando ? 7 : -5)
        const alturaMaxima = alturaJogo - this.elemento.clientHeight

        if (novoY <= 0){
            this.setY(0)
        } else if (novoY>= alturaMaxima){

        }else {
            this.setY(novoY)
        }
    }
    this.setY(alturaJogo /2)
}
//const barreiras = new Barreiras(700, 1200, 200, 400)
//const passaro = new Passaro(700)
//const areaDoJogo = document.querySelector('[wm-flappy]')

//areaDoJogo.appendChild(passaro.elemento)
//barreiras.pares.forEach(par => areaDoJogo.appendChild(par.elemento))
//setInterval(()=> {
  //  barreiras.animar()
    //passaro.animar()
//}, 20)


function Sobreposicao(elementoA, elementoB){
    const a = elementoA.getBoundingClientRect()
    const b = elementoB.getBoundingClientRect()

    const horizontal = a.left + a.width >= b.left 
            && b.left + b.width >= a.left
    const vertical = a.top + a.height >= b.top
            && b.top + b.height >= a.top
    return horizontal && vertical
}

function colizao(passaro, barreiras){
    let colizao = false
    barreiras.pares.forEach(ParDeBarreiras=>{
        if(!colizao) {
            const superior = ParDeBarreiras.superior.elemento
            const inferior = ParDeBarreiras.inferior.elemento

            colizao = Sobreposicao(passaro.elemento, superior)
                    || Sobreposicao(passaro.elemento, inferior)
        }
    })
    return colizao
}

function Progresso() {
    this.elemento = newElemento('span', 'progresso')
    this.atualizarPontos = pontos =>{
        this.elemento.innerHTML= pontos
    }
    this.atualizarPontos(0)
}

function Flappybird() {
    let pontos = 0

    const areaDoJogo = document.querySelector('[wm-flappy]')
    const altura = areaDoJogo.clientHeight
    const largura = areaDoJogo.clientWidth

    const progresso = new Progresso()
    const barreiras = new Barreiras(altura, largura, 200, 400,
        ()=> progresso.atualizarPontos(++pontos))
    const passaro = new Passaro(altura)

    areaDoJogo.appendChild(progresso.elemento)
    areaDoJogo.appendChild(passaro.elemento)
    barreiras.pares.forEach(par => areaDoJogo.appendChild(par.elemento))

    this.start = ()=>{
        const temporizador = setInterval(()=> {
            barreiras.animar()
            passaro.animar()

            if (colizao(passaro, barreiras)){
                clearInterval(temporizador)
            }
        },20)
    }
}
new Flappybird().start()