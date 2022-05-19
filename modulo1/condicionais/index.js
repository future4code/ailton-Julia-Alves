// Atividade Condicionais
/* Atividade de Interpretação 
1) a) o código faz uma analise se o número é par, ou seja, se o resto da divisão dele por 2 é igual a zero.
b) os números pares
c) todos que não forem diviseis por dois, ou seja, os números impares.

2)a) ver o preço da fruta escolhida
b)preco = 2.25
c) preco = 5

3)a)pedindo para o usuario digitar um número e pegando essa informação que é recebida em string e alterando para number, para além disso guardando essa resposta na variavel numero.
b) digitando 10:
Esse número passou no teste 
Essa mensagem é secreta!!!
digitando -10: undefined 
c)não havera erro no console visto que o if não define um escopo isolado, no Js só tem escopo de função e o escopo global 
*/
//Atividade escrita
//1)
const idade = Number(prompt("Qual a sua idade"))

if (idade>=18){
    console.log("Você pode dirigir")
} else if (idade<18){
    console.log("Você não pode dirigir")
} else{
    console.log("Você digitou o número de forma errada")
}
//2
const turno = prompt("Qual turno você estuda? digite M para matutino, V para vespertino e N para noturno")

if(turno==="M"){
    console.log("Bom Dia!")
} else if (turno==="V"){
    console.log("Boa Tarde!")
} else if (turno==="N"){
    console.log("Boa Noite!")
} else{
    console.log("Você digitou errado")

}
//3)
switch(turno){
    case "M":
        console.log("Bom Dia!")
        break;
    case "V":
        console.log("Boa Tarde!")
        break;
    case "N":
        console.log("Boa Noite!")
        break;
    default:
        console.log("Você digitou errado")
}
//4)
let genero = confirm("O gênero do filme que vocês vão assistir é fantasia?")
let preco = confirm("O preço do ingresso está abaixo de 15 reais?")

const verFilme = (inf1,inf2) =>{
    if(inf1&&inf2){
        return "Bom filme!"
    }else {
        return "Escolha outro filme :("
    }
}
console.log(verFilme(genero,preco))

//Desafio
//1)
const verFilme2 = (inf1,inf2) =>{
    if(inf1&&inf2){
        let lanche = prompt("Qual snack você quer comer?")
        return `Bom filme!
        Aproveite o seu snack: ${lanche}!`
    }else {
        return "Escolha outro filme :("
    }
}
console.log(verFilme2(genero,preco))
//2
let nomeCompleto = prompt("Digite seu nome completo:")
let tipoJogo = prompt("Digite se o tipo do jogo se é IN(internacional) ou DO (doméstico):")
let etapaJogo = prompt("Digite a etapa do jogo que você quer assistir: SF (semi-final); DT(decisão de terceiro lugar); ou FI(final)")
let categoria = Number(prompt("Digite a categoria do jogo (1,2,3 ou 4):"))
let quantidadeIngresso = Number(prompt("Digite a quantidade de ingressos que você tem interesse:"))

let valorDoIngresso = (etapaJogo,categoria) =>{
    switch(etapaJogo){
        case "SF":
            if(categoria===1){
                return Number(1320)
            } else if(categoria===2){
                return Number(880)
            } else if (categoria===3){
                return Number(550)
            } else if(categoria===4){
               return  Number(220)
            } else {
                return "Deu ruim"}
            break;
        case "DT":
            if(categoria===1){
                return Number(660)
            } else if(categoria===2){
                return Number(440)
            } else if (categoria===3){
                return Number(330)
            } else if(categoria===4){
               return  Number(170)
            } else {
                return "Deu ruim" }
            break;
        case "FI":
            if(categoria===1){
                return Number(1980)
            } else if(categoria===2){
                return Number(1320)
            } else if (categoria===3){
                return Number(880)
            } else if(categoria===4){
               return  Number(330)
            } else {
                return "Deu ruim" }
            break;
        default:
            console.log("DEU MERDA")
    }
}

let ValorRealIngresso = (etapaJogo) =>{
    if(tipoJogo==="DO"){
        return valorDoIngresso(etapaJogo,categoria)
    } else if (tipoJogo==="IN"){
        return valorDoIngresso(etapaJogo,categoria)*4.10
    }
}

console.log(`---Dados da compra ---
Nome do cliente: ${nomeCompleto}
Tipo do jogo: ${tipoJogo}
Etapa do jogo:${etapaJogo}
Categoria: ${categoria}
Quantidade de Ingresso: ${quantidadeIngresso}
--- Valores---
Valor do ingresso: ${ValorRealIngresso(etapaJogo)}
Valor total: ${quantidadeIngresso*ValorRealIngresso(etapaJogo)} reais `)


