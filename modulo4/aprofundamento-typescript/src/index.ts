// Exercício 1
// a) deu erro disse que o tipo da variavel era string e por isso não caberia atribuir um valor number 
// const minhaString:string = 2
// b) precisamos adicionar o OU "|" e colocar o outro tipo
let meuNumero:number|string 
meuNumero = 23
meuNumero= "juju"
// c)
const pessoa:{nome:string,idade:number,corFavorita:string}={
  nome:"Júlia",
  idade:25,
  corFavorita:"azul"
}
// não consegui criar mais três ojetos tipo dentro, sequenciado

type pessoa = {
  nome:string,
  idade:number,
  corFavorita:string
}

const pessoa2:pessoa={
  nome:"Júlia",
  idade:25,
  corFavorita:"azul"
}