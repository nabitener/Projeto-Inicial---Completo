let candidato = window.prompt("Por favor digite seu nome");
let divUm = document.getElementById("nome");
divUm.innerHTML = "Olá " + candidato;


let prova = window.prompt("Coloque o número correspondente a sua resposta \nDeseja fazer a prova? \n 1. Sim \n 2.Não")

if (prova==1) {

let primeiro = window.prompt("Questão 1)   Quanto é 2*1? \n A. 1 \n B. 2 \n C. 3")
let primeiroUpper = primeiro.toUpperCase()

if (primeiroUpper=="B") {
    let divDois = document.getElementById("corretas-um")
    divDois.innerHTML = "Questão 1"

} else {
    let divTres = document.getElementById("incorretas-um")
    divTres.innerHTML = "Questão 1"
    
}

let segundo = window.prompt("Questão 2 \nQual a cor do meu gato preto? \nA. Branco \nB. Amarelo \nC. Preto")
let segundoUpper = segundo.toUpperCase()
if (segundoUpper=="C") {
    let divQuatro = document.getElementById("corretas-dois")
    divQuatro.innerHTML = "Questão 2"

} else {
    let divCinco = document.getElementById("incorretas-dois")
    divCinco.innerHTML =  "Questão 2"
}

let terceiro = window.prompt("Questão 3 \nQuanto é 4 + 2? \nA. 6 \nB. 7 \nC. 8")
let terceiroUpper = terceiro.toUpperCase()
if (terceiroUpper=="A") {
    let divSeis = document.getElementById("corretas-tres")
    divSeis.innerHTML = "Questão 3"

} else {
    let divSete = document.getElementById("incorretas-tres")
    divSete.innerHTML =  "Questão 3"
}
    
} else {
    alert("Prova Cancelada")
    document.location.reload(true);
}