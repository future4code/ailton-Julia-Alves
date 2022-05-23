// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length  
}
console.log(retornaTamanhoArray(array))
// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}
console.log(retornaArrayInvertido(array))
// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  return array.sort((a,b)=>a-b)
}
console.log(retornaArrayOrdenado(array))
//vi na internet e não entendi muito como funcionou 
// EXERCÍCIO 04
function retornaNumerosPares(array) {
  arrayPares=[]
  let i =0
  for(let i=0;i<array.length;i++){
       if(array[i]%2===0){
           arrayPares.push(array[i])
       }else {
           console.log("deu ruim") 
       }
        
  } 
  return arrayPares
}
console.log(retornaNumerosPares(array))
// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    arrayPares1=[]
    let i =0
    for(let i=0;i<array.length;i++){
         if(array[i]%2===0){
             arrayPares1.push(array[i]**2)
         }else {
             console.log("deu ruim") 
         }
          
    } 
    return arrayPares1
}
console.log(retornaNumerosParesElevadosADois(array))

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let i = 0
    let maior = -Infinity
for(let i=0;i<array.length;i++){
    if(array[i]>maior){
    maior=array[i]
    }else{
        console.log("Deu ruim")
    }
}
return maior 
}
console.log(retornaMaiorNumero(array))

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
let objeto ={
    maiorNumero:0,
    maiorDivisivelPorMenor:0,
    diferenca:0}

    if(num1>num2){
    objeto.maiorNumero= num1
    objeto.maiorDivisivelPorMenor=num1%num2===0
    objeto.diferenca= num1-num2
    }else if (num2>=num1){
    objeto.maiorNumero= num2
    objeto.maiorDivisivelPorMenor=num2%num1===0
    objeto.diferenca= num2-num1
    }else {
        console.log("DEU RUIM ")
    }
return objeto
}
// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}