//Função que muda a calculadora do modo escuro para o claro 
function darkmode(){
    var res = window.document.getElementById('res')
    var imgclara = document.getElementById('img1')
    var imgescura = document.getElementById('img2')
    var calculadora = document.getElementById('calculadora')
    calculadora.style.backgroundColor ="rgba(240, 248, 255, 0.7)"
    res.style.border = "3px solid rgba(0, 0, 0, 0.418)"
    calculadora.style.border = "3px solid rgba(0, 0, 0, 0.418)"
    imgclara.style.display ='flex'
    imgescura.style.display ='none'
}

//Função que muda a calculadora do modo claro para o escuro
function dark() {
    var res = window.document.getElementById('res')
    var imgclara = document.getElementById('img1')
    var imgescura = document.getElementById('img2')
    var calculadora = document.getElementById('calculadora')
    var botoes = window.document.getElementsByClassName('botoes')
    res.style.border= "3px solid rgba(255, 255, 255, 0.733)"
    calculadora.style.backgroundColor = "rgba(0, 0, 0, 0.4)"
    calculadora.style.border = "3px solid rgba(255, 255, 255, 0.733)"
    imgclara.style.display ='none'
    imgescura.style.display ='flex'
}

// Função atribuida ao botão AC da calculadora, com a finalidade de limpar os dados 
function clean(){
    window.document.getElementById('res').innerHTML = ''

}

//Função do cálculo da calculadora
function calc(){
    var res = window.document.getElementById('res').innerHTML
    
    if(res){
        window.document.getElementById('res').innerHTML = eval(res)
    }else{
       var res = window.document.getElementById('res').innerHTML = "Nada para calcular"
    }
}

//Função para inserir os numeros na parte do cálculo
function insert(num){
    var numero = document.getElementById('res').innerHTML
    document.getElementById('res').innerHTML = numero + num 
}