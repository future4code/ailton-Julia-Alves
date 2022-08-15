// Exercício 1
// pq o process.argv não funciona no tipescript 

function checarTriangulo (a:number, b:number,c:number):string{
if(a !== b && b !==c){
  return "Escaleno"
}else if (a === b && b === c){
return "Equilátero"
}else{
  return "Isósceles"
}
}

console.log(checarTriangulo(3,6,8))
console.log(checarTriangulo(6,6,6))
console.log(checarTriangulo(3,3,8))

// Exercício 2 

// opção1
function imprimeTresCoresFavoritas(cor1?:string, cor2?:string, cor3?:string):void{
  const result = console.log(cor1,cor2,cor3)
  return  result
}
imprimeTresCoresFavoritas("vermelh","rosa","preto")
// opção 2
function imprimeTresCoresFavoritas2():void{
  const cor1:string = "vermelho"
  const cor2:string = "azul"
  const cor3:string = "amarelo"
  return  console.log(cor1,cor2,cor3)
}

// não sei como solucionar sem usar o process.argv

// Exercício 3 
function checaAnoBissexto(ano:number):boolean{
  const cond1:any = ano%400 === 0
  const cond2:any = (ano%4 === 0 ) && (ano%100 !== 0)
  return cond1 || cond2
}

console.log(checaAnoBissexto(1200))
console.log(checaAnoBissexto(1600))
console.log(checaAnoBissexto(2100))
console.log(checaAnoBissexto(2200))

// Exercício 4
function compararDoisNumeros(num1:number,num2:number):number{
  let maiorNumero:number;
  let menorNumero:number;
  if(num1>num2){
     maiorNumero = num1
     menorNumero = num2
  } else{
    maiorNumero = num2
    menorNumero = num1
  }
  const diferenca:number = maiorNumero - menorNumero

  return diferenca
}

console.log(compararDoisNumeros(2,10))
console.log(compararDoisNumeros(20,10))
// tive dificuldade pq de primeira caracterizei as linhas 55/56 e 58/59 como let e coloquei a tipagem number e não deu resultado, também estou com dificuldade com relação ao void e any quando usar 

// Exercício 5

function checarRenovacaoRG(anoAtual:number,anoNascimento:number,anoEmissao:number):string{

  let idade:number = anoAtual - anoNascimento
  let tempoDeCarteira:number = anoAtual - anoEmissao

  if(idade <=20){
    return tempoDeCarteira >=5 ? "passou dos 5 anos precisa renovar" : "ainda não passou os 5 anos"
  } else if ( idade >=20 || idade <= 50){
    return tempoDeCarteira >=10 ? "passou dos 10 anos precisa renovar" : "ainda não passou os 10 anos"
  } else if (idade>50){
    return tempoDeCarteira >=15 ? "passou dos 15 ano precisa renovar" : "ainda não passou os 15 anos"
  } else{
    return "error"
  }
}

console.log(checarRenovacaoRG( 2022,1966,2000))
console.log(checarRenovacaoRG(2022,1966,2019))
console.log(checarRenovacaoRG(2022,1997, 2000))
console.log(checarRenovacaoRG(2022,1997,2019))

// Exercício 6

function math(num1:number,num2:number):any{
  let maiorNumero:number;
  let menorNumero:number;
  if(num1>num2){
    maiorNumero = num1
    menorNumero = num2
  } else{
    maiorNumero=num2
    menorNumero = num1
  }
  const subtracao:number = maiorNumero - menorNumero
  return `
  A soma entre eles é de: ${num1+num2}; 
  A diferença entre eles é de ${subtracao}; 
  A multiplicação desses números é de ${num1*num2};
  O maior entre esses dois números é ${maiorNumero}`
}
console.log(math(10,2))
console.log(math(2,4))

// Exercício 9
// esse eu consigo fazer mas vou tentar depois 