// var - escopo global 
// let - escopo local - a mais utilizada
// const - escopo global mas ConstantSourceNode, não muda. 

// estou pegando o elemento que tem o ID nome, nesse caso o input...
let nome = window.document.getElementById("nome") 

let email = document.querySelector("#email")

let assunto = document.querySelector("#assunto")

let tempo = document.querySelector('#tempo')

// EVENTOS 

//verificando e-mail
function validaEmail (){

    let txtEmail = document.querySelector('#txtEmail')
    if (email.value.indexOf('@')  == -1 || email.value.indexOf('.') == -1 ) {
        txtEmail.innerHTML = 'email invalido'
        txtEmail.style.color = 'red'
        txtEmail.style.align = "center"
    }  else{
        txtEmail.innerHTML = ""
    }


}

function enviar(){
    if(verifica()){
        alert("Olá " + nome.value + "! Email enviado com sucesso")
    }
}

function verifica(){
    if(nome.value == "" || email.value == "" || assunto.value == ""){
        alert("Todos os campos são obrigatórios")
        return false
    }
    return true
}

function insereHTML(){
    espaco.innerHTML = "mensagem enviada"
}

function tempoMsg(){
    setTimeout("insereHTML()", 3000)
}

function darkTheme(){
    document.body.classList.toggle('dark-theme')
}