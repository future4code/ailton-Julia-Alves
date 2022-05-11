// Atividade Strings e Arrays 

//Atividade de Interpretação 
/* 
1)
a. undefined 
b. null
c. 11
d. 3 
e. 3,19,5,6,7,8,9,10,11,12,13
f. 9

2)
SUBI NUM ÔNIBUS EM MIRROCOS,27
*/

//Atividade de Escrita
//1)
const nomeUsuario = prompt("Digite seu nome:");
const emailUsuario = prompt("Digite seu e-mail:");

console.log(`O emai-l ${emailUsuario} foi cadastrado com sucesso. 
Seja bem-vinda(o), ${nomeUsuario}.`);
//2)
const comidas = ["sushi", "salada","lasanha de beringela","cozido","hamburguer vegano"]
//a)
console.log(comidas)
//b)
console.log(`Essas são as minhas comidas preferidas:
${comidas[0]}
${comidas[1]}
${comidas[2]}
${comidas[3]}
${comidas[4]}`)
//c)
const comidaUsuario = prompt("Qual sua comida preferida?")
comidas[1]= comidaUsuario

console.log(`Lista de comidas preferidas:
${comidas[0]}
${comidas[1]}
${comidas[2]}
${comidas[3]}
${comidas[4]}`)
//d)
const listaDeTarefas =[]
const tarefa1 = prompt("Digite uma tarefa que você precisa realizar hoje:")
const tarefa2 = prompt("Digite outra tarefa:")
const tarefa3 = prompt("Digite outra tarefa:")

listaDeTarefas.push(tarefa1)
listaDeTarefas.push(tarefa2)
listaDeTarefas.push(tarefa3)
console.log(listaDeTarefas)

const tarefaConcluida = prompt("Das tarefas que você mencionou, digite um número de 0 -2 para indicar a que você já realizou ")
listaDeTarefas.splice(tarefaConcluida,1)
console.log(listaDeTarefas)
//DESAFIO
//1)
const frase = prompt("Digite uma frase:")
const resultado = frase.split(" ")
console.log(resultado)

//2)
const frutas = ["Banana","Morango","Abacaxi","Laranja","Ameixa"]
const resultado1 = frutas.indexOf("Abacaxi")
const tamanho = frutas.length
console.log(resultado1, tamanho)