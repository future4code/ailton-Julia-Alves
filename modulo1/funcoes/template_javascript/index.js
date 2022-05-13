//Atividade de Interpretação 
/*
1)a)10; 50
b)não apareceria nada, visto que o console.log que imprime a informação.

2)a) Essa função coloca o texto em letra minuscula e busca na frase a palavra "cenoura", dando retorno com true ou false
b)i) eu gosto de cenoura true
ii) cenoura é bom para vista true
iii) cenouras crescem na terra true 
*/
//Atividade de Escrita 
// //1) a)
const apresentação = (texto)=> console.log(`Eu sou Júlia, tenho 24 anos, moro em Salvador e sou advogada`)
apresentação()

//b) 
const nome = prompt("Qual o seu nome?")
const idade = prompt("Qual a sua idade?")
const cidade = prompt("Em que cidade você mora?")
const profissao = prompt("Qual a sua profissão?")

const resposta = (texto) => (`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}`)

console.log(resposta())
//2
const numero1 = Number(prompt("Digite um número:"))
const numero2 = Number(prompt("Digite outro número:"))
//a)
const soma =(num1, num2) => console.log(num1+num2)
soma(numero1,numero2)
//b)
const maior = (num1,num2)=> console.log(num1>num2)
maior(numero1,numero2)
//c)
const par =(num1)=> console.log((num1%2)===0)
par(numero1)
par(numero2)
//d)
const frase = prompt("Digite uma frase:")

const tamanho = (texto) => texto.length
const maiuscula = (texto) => texto.toUpperCase()

console.log(tamanho(frase),maiuscula(frase))
//3)
const numero3 = Number(prompt("Digite um número:"))
const numero4 = Number(prompt("Digite outro número:"))

const soma2 =(num1, num2) => num1+num2
const subt =(num1, num2) => num1-num2
const mult =(num1, num2) => num1*num2
const divi =(num1, num2) => num1/num2

console.log(`Números inseridos: ${numero1} e ${numero2}
Soma: ${soma2(numero1,numero2)}
Diferença: ${subt(numero1,numero2)}
Multiplicação: ${mult(numero1,numero2)}
Divisão: ${divi(numero1,numero2)}`)

//Desafio 
//1)

const numero5 = Number(prompt("Digite um número:"))
const numero6 = Number(prompt("Digite outro número:"))

const resultado = (resultadosoma) =>console.log(resultadosoma)


const somatorio8 =(numer1,numer2) => resultado(numer1+numer2)

somatorio8(numero5,numero6)
