/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
//DESAFIO EM ANDAMENTO 
const comeco = confirm(`Bem-vinde ao jogo de Blackjack!
Quer iniciar uma nova rodada?`)
    
const carta1 = comprarCarta()
const carta2 = comprarCarta()
const carta3 = comprarCarta()
const carta4 = comprarCarta()
const pontuacao1= carta1.valor+ carta2.valor
const pontuacao2 = carta3.valor+carta4.valor
    
const jogador =(num1,num2)=>{
return `Usuário - cartas: ${num1.texto} ${num2.texto} - pontuação ${num1.valor+num2.valor}`
}
const pc = (num1,num2)=>{
return `Computador - cartas ${num1.texto} ${num2.texto} - pontuação ${num1.valor+num2.valor}`
}

if (comeco===false) {
        console.log("O jogo acabou ")
    
}else if (comeco===true) {
const jogo = confirm(`Suas cartas são ${carta1.texto} ${carta2.texto}. A carta revelada do computador é ${carta3.texto}. Deseja comprar mais uma carta?`)
if(jogo===true){

}else {
    
}
} else {
    console.log("DEU RUIM")}
