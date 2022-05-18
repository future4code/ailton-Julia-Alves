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
for(i=0;i<numeroBichos;i++ ){
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
    par.push(arrayOriginal[i]) // dando erro aqui
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
    for(i=0;i<arrayOriginal.length;i++){
        const elemento1 = arrayOriginal[i]
        if(elemento1>maior){
            maior= elemento1} 
        }
        console.log(maior)
        console.log(menor)
}
console.log(maiorMenor())