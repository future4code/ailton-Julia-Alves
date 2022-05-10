/*
Atividade de interpretação

Atividade 1)
a. false
b. false
c. true
d. booleans 

Atividade 2) O problema é que ele está tentando somar duas strings,
vai ser impresso na tela uma string ao lado da outra. 
Exemplo: se colocarem 2 e 4, vai aparecer 24 e essa não é a soma.

Atividade 3) para consertar ele deve fazer a conversão de string 
para number que pode ser feito da seguinte forma: Number(),
logo fica:
let primeiroNumero = Number(prompt("Digite um número!""))
let segundoNumero = Number(prompt("Digite outro número!"))

após isso pode dar seguimento
*/

//Atividade de escrita 

//Atividade 1)

let suaIdade = Number(prompt("Qual a sua idade?"))
let idadeAmigo = Number(prompt("Qual a idade do seu melhor amigo(a)?"))

console.log("Sua idade é maior que a do seu amigo?", suaIdade>idadeAmigo)
console.log("A diferença de idade de vocês é de:", suaIdade-idadeAmigo, "anos")
console.log("Obs: se você for mais velho que seu amigo(a), esse último valor pode sair negativo")

//Atividade 2)
let numeroPar = Number(prompt("Insira um número par:"))

console.log("O resto da divisão desse número por 2 é:", numeroPar%2)

//c) o resto da dívisão sempre vai ser 0, por ser um número par.
//d) se o usuario inserir um número ímpar o resto da divisão por 2 vai ser 1.

//Atividade 3)

let idade = Number(prompt("Quantos anos você tem?"));

let meses = idade*12
let dias = meses*30
let horas = dias*24


console.log("Você tem:", meses,"meses de vida.");
console.log("Você tem:", dias, "dias de vida.");
console.log("Você tem:", horas,"horas de vida.");

//Atividade 4)
let primeiroNumero = Number(prompt("Digite um número:"))
let segundoNumero = Number(prompt("Digite outro número:"))

console.log("O primerio número é maior que o segundo?", primeiroNumero>segundoNumero);
console.log("O primeiro número é igual ao segundo?", primeiroNumero===segundoNumero);
console.log("O primeiro número é divisível pelo segundo?", (primeiroNumero%segundoNumero)===0)
console.log("O segundo número é divisível pelo primeiro?", (segundoNumero%primeiroNumero)===0)

//Desafio
//Atividade 1)
//a)
const temperaturaF =77
console.log("O valor de 77°F em °K é:", (temperaturaF-32)*(5/9)+273.15,"°K")
//b)
const temperaturaC = 80
console.log("O valor de 80°C em °F é:", temperaturaC*(9/5)+32,"°F")
//c)
const temperaturaCDois = 30 
let F = temperaturaCDois*(9/5)+32
let K = (F-32)*(5/9)+273.15
 console.log("O valor de 30°C em °F é:",F,"°F",K,"°K")
//d)
let temperaturaUsuario = Number(prompt("Digite um temperatura em °C(celsius)"))
let fUsuario = temperaturaUsuario*(9/5)+32
let kUsuario = (F-32)*(5/9)+273.15
console.log("A temperatura escolhida em °C é:",fUsuario,"°F",kUsuario,"°K")

//Atividade 2)
let quilowatts = 280
let valor = quilowatts*0.5
let desconto = (valor/100)*15 
//a)
console.log("O valor a ser pago pelo consumo da sua residência é de:",valor,"reais")
//b)
console.log("O valor a ser pago com 15% de desconto é de:", valor-desconto,"reais")

//Atividade 3)
//a)
let libras = 20
let kg = libras*0.453592

console.log("20 lb equivalem a",kg,"kg")
//b)
let oz = 10.5
console.log("10.5 oz equivalem a",(oz*0.02835),"kg")
//c)
let milha = 100
console.log("100 mi equivalem a",milha*1609.34,"m")
//d)
let ft = 50
console.log("50 ft equivalem a", ft*0.3048,"m")
//e)
let litro = 1
let gal = litro*0.2624
console.log("103.56 gal equivalem a",103.56*gal,"l")

//não fiz o resto que me embolei e to achando que to fazendo essa questão de forma errada 
