//Atividades Laços 
/* Atividade de interpretação 
1) O resultado impresso no console é 10.

let valor = 0//1//3//6//10
for(let i = 0; i < 5; i= i+1) {
  valor = valor + i 
}
console.log(valor)

i= 0//1//2//3//4

2)a) 
19
21
23
25
27
30
b) o metodo é suficiente, para acessar cada elemento é necessário tirar a condicional do if e acrescentar "lista.indexOf(numero)" dentro do console.log()
3)
*
**
***
****

*/

//Atividade escrita
//1)
let numeroBichos = Number(prompt("Quantos bichos de estimação você tem?"))
let listaBichos = []

if(numeroBichos===0){
    console.log("Que pena! Você pode adotar um pet")
} else if (numeroBichos>0) {
for(let i=0;i<numeroBichos;i++ ){
    let nomeBicho = prompt("Digite o nome do seu bicho")
    listaBichos.push(nomeBicho)
}0
} else {
    console.log("Deu ruim")
}
console.log(listaBichos)
//2)
let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
//a)
const imprimirValores = ()=>{
    console.log(arrayOriginal)
} 
console.log(imprimirValores())
//b)
const divideValores = ()=>{
    for(let i=0;i<arrayOriginal.length;i++){
    arrayOriginal[i]= arrayOriginal[i]/10}
     return arrayOriginal
}
console.log(divideValores())
//c)
const criarArrPar = ()=>{
    let par =[]

for(let i=0;i<arrayOriginal.length;i++){
if (arrayOriginal[i]%2===0){
    par.push(arrayOriginal[i]) 
}} return par
}
console.log(criarArrPar())
//d)
const arrayString = () =>{
    for(let i=0;i<arrayOriginal.length;i++){
        arrayOriginal[i]= `O elemento do índex ${i} é: ${arrayOriginal[i]}`
    } return  arrayOriginal
} 
console.log(arrayString())
//e)
const maiorMenor = () =>{
    let maior = 0
    let menor = Math.min(...arrayOriginal)
    for(let i=0;i<arrayOriginal.length;i++){
        const elemento1 = arrayOriginal[i]
        if(elemento1>maior){
            maior= elemento1} 
        }
        console.log(maior)
        console.log(menor)
}
console.log(maiorMenor())
// Desafio
// 1)
let tentativas =[]
console.log("Vamos jogar!")
let numeroCerto = Number(prompt("Escolha um número para seu adversário advinhar:"))
let numeroAdversario = Number(prompt("Qual número você acha que seu adversário escolheu?"))
tentativas.push(numeroAdversario)

const maiorMenor = (num1,num2)=>{
    if (num1>num2){
        return "MAIOR"
    }else if (num1<num2){
        return "MENOR"
    }else {
        return "Deu ruim"
    }
}
while (numeroAdversario!==numeroCerto) {
    console.log(`Errou!!
    O número chutado foi: ${numeroAdversario}
    O número escolhido pelo seu adversário é: ${maiorMenor(numeroCerto,numeroAdversario)}`)
    numeroAdversario= Number(prompt("Digite outro número que você acha que seu adversário escolheu:"))
    tentativas.push(numeroAdversario)
}if (numeroAdversario===numeroCerto) {
        console.log(`Acertou
        O número de tentaivas foi: ${tentativas.length}`)
       
    }
//2)
let tentativas =[]
console.log("Vamos jogar!")
let numeroCerto = Math.floor(Math.random()*100)
let numeroAdversario = Number(prompt("Qual número você acha que seu adversário escolheu?"))
tentativas.push(numeroAdversario)

const maiorMenor = (num1,num2)=>{
    if (num1>num2){
        return "MAIOR"
    }else if (num1<num2){
        return "MENOR"
    }else {
        return "Deu ruim"
    }
}
while (numeroAdversario!==numeroCerto) {
    console.log(`Errou!!
    O número chutado foi: ${numeroAdversario}
    O número escolhido pelo seu adversário é: ${maiorMenor(numeroCerto,numeroAdversario)}`)
    numeroAdversario= Number(prompt("Digite outro número que você acha que seu adversário escolheu:"))
    tentativas.push(numeroAdversario)
}if (numeroAdversario===numeroCerto) {
        console.log(`Acertou
        O número de tentaivas foi: ${tentativas.length}`)
       
    }

//para a alteração ter sido mais fácil eu poderia ter visto a dica, mas de qualquer forma não foi díficil, tive que buscar o comando para o computador escolher um comando de forma aleatoria

