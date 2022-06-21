// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length  
}
// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}
// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  return array.sort((a,b)=>a-b)
}
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
   let numerosPares =[]
   for(let i=0;numerosPares.length<n;i++){
    if (i%2===0){
    numerosPares.push(i)
   }}
return numerosPares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
if(ladoA===ladoB && ladoA===ladoC){
    return "Equilátero"
} else if (ladoA===ladoB||ladoA===ladoC||ladoB===ladoC){
    return "Isósceles"
} else{
    return "Escaleno"
}
}
// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
const ordemArray = retornaArrayOrdenado(array)  
return [ordemArray[ordemArray.length-2], ordemArray[1]]
} 
//queria usar pop(), splice(), math.max() e math.min() e não consegui 
// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
}
// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
let novoObjeto ={
    ...pessoa,
    nome: "ANÔNIMO",
}
return novoObjeto
}
// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
let permissao= []
    for(let i=0; i<pessoas.length;i++){
    if (pessoas[i].altura>=1.50 && 14<pessoas[i].idade && pessoas[i].idade<60)
    permissao.push(pessoas[i])
} return permissao
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    let naoPermissao= []
    for(let i=0; i<pessoas.length;i++){
    if (pessoas[i].altura<1.50 || 14>=pessoas[i].idade|| pessoas[i].idade>=60)
    naoPermissao.push(pessoas[i])}
return naoPermissao}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}