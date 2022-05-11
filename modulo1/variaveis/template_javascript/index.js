//Atividade de interpretação
// 1) (10) e (10 5)
// 2)  (10 10 10) 
// 3) p = horasDeTrabalho; t= recebePorDia

//Atividade de escrita
//Atividade 1)
/*
let nome 
let idade 
console.log(typeof nome, typeof idade)

No console apareceu undefined porque não defini nenhuma variavel 
e não atribui diretamente a váriavel null. 
Como let é uma variável que pode mudar 
existe essa possibilidade.
*/
let nome = prompt("Qual é o seu nome?")
let idade = prompt("Qual é a sua idade?")

console.log(typeof nome, typeof idade)
// Apareceu no console string string, visto que todo resultado de prompt é string
console.log("Olá", nome, "você tem", idade,"anos")

//Atividade 2)

let chocolate = prompt("Você gosta de chocolate? (responda sim ou não)");
let salvador = prompt("Você mora em Salvador? (responda sim ou não)");
let praia = prompt("Você gosta de ir na praia? (responda sim ou não)");

console.log("Você gosta de chocolate?", chocolate);
console.log("Você mora em salvador?", salvador);
console.log("Você gosta de ir na praia?", praia)
/*
Achei o enunciado confuso, porque achei que as perguntas tinham que estar em uma única váriavel 
e depois pede para criar novas váriaveis sendo que elas já existem e por fim senti a necessidade 
de colocar na pergunta que a resposta tinha que ser com sim ou não (isso me remeteu a lógica)
*/

//Atividade 3)
let a = 10
let b = 25
c=a
a=b
b=c

console.log("O novo valor de a é", a)
console.log("O novo valor de b é", b)

//Desafio 
let numero1 = Number(prompt("Digite um número:"))
let numero2 = Number(prompt("Digite outro número:"))
S= numero1+numero2
M= numero1*numero2

console.log("O primeiro número somado ao segundo número resulta em:", S)
console.log("O primeiro número multiplicado pelo segundo número resulta em:", M)