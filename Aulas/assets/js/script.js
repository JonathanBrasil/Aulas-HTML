// var - escopo global 
// let - escopo local - a mais utilizada
// const - escopo global mas ConstantSourceNode, não muda. 

// estou pegando o elemento que tem o ID nome, nesse caso o input...
let nome = window.document.getElementById("nome") 

let email = document.querySelector("#email")

let data = document.querySelector("#data")

let tempo = document.querySelector('#tempo')

// EVENTOS 

function validaEmail (){

    let txtEmail = document.querySelector('#txtEmail')
    if (email.value.indexOf('@')  == -1 || email.value.indexOf('.') == -1 ) {
        txtEmail.innerHTML = 'email invalido'
        txtEmail.style.color = 'red'
        txtEmail.style.align = "center"
    }
    else {
        txtEmail.innerHTML = "email valido"
        txtEmail.style.color = 'green'
    }

}

function insereHTML(){
    espaco.innerHTML = "mensagem enviada"
}

function tempoMsg(){
    setTimeout("insereHTML()", 3000)
}