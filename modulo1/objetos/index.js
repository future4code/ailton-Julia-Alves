// Atividade Objetos 

/* Atividade de Interpretação

1)a) 
Matheus Nachtergaele
Virginia Cavendish 
canal: Globo, horario: 14h

2)a)
nome: Juca
idade: 3
raca: SRD

nome: Juba
idade:3
raca: SRD

nome: Jubo
idade:3
raca: SRD

b) ela espelha o objeto, ou seja, faz uma cópia de tudo do objeto.

3)a)
false
undefined

b)[" "] é uma forma de acessar valores de um objeto, chamada de notação de colchetes.
é como se quisessemos acessar apenas as informações de beckender e alttura do objeto pessoa.
*/

//Atividade de escrita 

//1)a)
const pessoa = {
    nome: "Júlia",
    apelido: ["jujuba","ju","JuMo"]
}

const frase = (obj) =>`Eu sou ${obj.nome}, mas pode chamar de: ${obj.apelido[0]},${obj.apelido[1]} ou ${obj.apelido[2]}`
//b)
const novaPessoa ={
    ...pessoa,
    apelido: ["TheMoniz","julinha","moniz"]
}

//2)a)
const pessoa2 ={
   nome: "Júlia",
   idade: 24,
   profissao:"advogada" 
}

const pessoa3 = {
    nome:"Caroll",
    idade: 56,
    profissao:"astrologa"
}
//b)
const resposta = (objeto) =>[objeto.nome,(objeto.nome).length,objeto.idade,objeto.profissao,(objeto.profissao).length]

//3)a)
const carrinho =[]
//b)
const fruta1 = {
    nome:"Tangerina",
    disponibilidade: true 
}

const fruta2 = {
    nome:"Melancia",
    disponibilidade:true
}

const fruta3 = {
    nome:"Manga",
    disponibilidade:true
}
//c)
const compras =(fruta)=> carrinho.push(fruta)

compras(fruta1)
compras(fruta2)
compras(fruta3)
//d)
console.log(carrinho)

//Desafio
//1)
function pergunta() { 
    const nomeDoUsuario = prompt("Qual o seu nome?")
    const idadeDoUsuario = prompt("Qual a sua idade")
    const profDoUsuario = prompt("Qual a sua profissão")
    const objeto1 = {
       nome: nomeDoUsuario,
       profissão: profDoUsuario,
       idade: idadeDoUsuario}
    console.log(`nome: ${objeto1.nome}, profissão: ${objeto1.profissão}, idade: ${objeto1.idade}`)
    console.log(typeof objeto1)
}

pergunta()
//2)
const filme1 = {
    nome:"Viva: a vida é uma festa",
    anoLancamento: 2017
}
const filme2 = {
    nome:"Robôs",
    anoLancamento:2005
}
function desafio(f1,f2){
console.log(`O primeiro filme foi lançado antes do segundo filme? ${Number(f1.anoLancamento)<Number(f2.anoLancamento)}`)
console.log(`O primeiro filme foi lançado no mesmo ano do segundo filme? ${Number(f1.anoLancamento)===Number(f2.anoLancamento)}`)
}
desafio(filme1,filme2)
//3)
function sacolao (fruta){
    return!(fruta.disponibilidade)
}
