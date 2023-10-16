const jogador1 = 'X'
const jogador2 = 'O'
var jogadaVez = jogador1
var fimJogo = false
var vencedor = ""
idXis = []
idBolinha = []

function criarElemento(tag,classe,jogador){
    var elemento = document.createElement(tag)
    elemento.setAttribute('class', classe)
    elemento.innerHTML = jogador
    return elemento
}



function criarBolinha(id){
    var divPai = document.getElementById(id)
    divPai.setAttribute('jogador', 'O')
    if(divPai.hasChildNodes()){
        return
    }else{
        var divbolinha = criarElemento('div','bolinha','O')
        var bolinha = document.getElementById(id).appendChild(divbolinha)
        jogadaVez = jogador1
        return bolinha
    }

}

function criaXis(id){ 
    var divPai = document.getElementById(id)
    divPai.setAttribute('jogador', 'X')
    if(divPai.hasChildNodes()){
        return
    }else{
        var divXis = criarElemento('div','xis','X')
        var xis = document.getElementById(id).appendChild(divXis)
        jogadaVez = jogador2
        return xis
    }

}

function jogar(id){
    if(fimJogo){
        return
    }else if(jogadaVez == jogador1){
        criaXis(id)
        idXis.push(id)
        verificarVencedor()

    }else{
        
        criarBolinha(id)
        idBolinha.push(id)
        verificarVencedor()
    }
}
function verificarVencedor(){
    var um = document.getElementById('um').getAttribute("jogador")
    var dois = document.getElementById('dois').getAttribute("jogador")
    var tres = document.getElementById('tres').getAttribute("jogador")

    var quatro = document.getElementById('quatro').getAttribute("jogador")
    var cinco = document.getElementById('cinco').getAttribute("jogador")
    var seis = document.getElementById('seis').getAttribute("jogador")

    var sete = document.getElementById('sete').getAttribute("jogador")
    var oito = document.getElementById('oito').getAttribute("jogador")
    var nove = document.getElementById('nove').getAttribute("jogador")

    if((um == dois && um == tres && um != "") || (um == quatro && um == sete && um != "") 
    || (um == cinco && um == nove && um != "")){
        vencedor = um
       
    }
    if((tres == cinco && tres == sete && tres != "") || (tres == seis && tres == nove && tres != "")
     ){
        vencedor = tres
       
    }
    if(nove == oito && nove == sete && nove != ""){
        vencedor = nove
        
    }
    if((cinco == seis && cinco == quatro && cinco != "") || (cinco == dois && cinco == oito && cinco != "")){
        vencedor = cinco
       

    }

    if(vencedor != null){
        fimJogo = true
        var msgFim  = document.getElementById('fimJogo')
        msgFim.innerHTML = `O Vencedor foi o : ${vencedor} `
        msgFim.style.display = 'block'
       
    }
}





