// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
const altura = Number(prompt("Digite a altura do seu retângulo:"))
const largura =Number(prompt("Digite a largura do seu retângulo:"))
const areaDoRetangulo = altura*largura
console.log(areaDoRetangulo)
  return areaDoRetangulo
}

// EXERCÍCIO 02
function imprimeIdade() {
const anoAtual = Number(prompt("Qual o ano atual?"))
const anoDeNascimento = Number(prompt("Qual o seu ano de nascimento?"))
const idade = anoAtual-anoDeNascimento
console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC() {
const peso = Number(prompt("Qual o seu peso atual?"))
const altura = Number(prompt("Qual a sua altura?"))
const indiceDeMassaCorporea = (peso/(altura*altura))
console.log(indiceDeMassaCorporea)
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt("Qual o seu nome?")
  const idade = prompt("Qual a sua idade?")
  const email = prompt("Qual o seu email?")
  const mensagem =`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`
  console.log(mensagem)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1 = prompt("Qual a sua cor favorita?")
  const cor2 = prompt("Qual a sua segunda cor favorita?")
  const cor3 = prompt("Qual a sua terceira cor favorita?")
  const coresFavoritas= [cor1,cor2,cor3]
  console.log(coresFavoritas)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
const resposta = string.toUpperCase()
return(resposta)
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo,valorIngresso) {
const vendidos = custo/valorIngresso
return(vendidos)
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
const tamanho1 = string1.length 
const tamanho2 = string2.length 
const tamanhoReal = tamanho1===tamanho2
return (tamanhoReal)
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  const retorno = array[0]
return retorno
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
const ultimo = array.pop()
return ultimo
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
const primeiroElemento = array[0]
const ultimoElemento = array[array.length-1]

array[0] = ultimoElemento
array[array.length-1] = primeiroElemento

return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
const checar = string1.toUpperCase()===string2.toUpperCase()
return checar
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}