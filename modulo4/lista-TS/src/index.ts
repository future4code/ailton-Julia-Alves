// Exercício 1 

function nomeData(nome:string,dataNascimento:string):void{
  const dividirString:string[] = dataNascimento.split("/",3)
  let dia:string = dividirString[0]
  let mes:string = dividirString[1]
  let ano:string = dividirString[2]
  return  console.log(`Olá me chamo ${nome}, nasci no dia ${dia} do mês de ${mes} do ano de ${ano}`)
}

nomeData("Juju","27/06/1997")

// Exercício 2 
function variavel(parametro:any){
 return console.log(typeof parametro)
}

variavel(25)
variavel("juju")

// Exercício 3 
  enum genero {
	  ACAO="ação",
	  DRAMA="drama",
	  COMEDIA="comédia",
	  ROMANCE="romance",
	  TERROR="terror"
  }

  type typeFilme = {
    nome: string,
    anoLancamento: number,
    genero: genero,
    pontuacao?: number
  }

  function filme(nome:string,anoLancamento:number,genero:genero,pontuacao?:number):typeFilme {
  const novoFilme:typeFilme = {
    nome,
    anoLancamento,
    genero,
}
if (pontuacao) {
  novoFilme.pontuacao = pontuacao
}
  return novoFilme 
}

console.table(filme("Duna", 2021, genero.ACAO, 74))
console.table(filme("Duna", 2021, genero.ACAO))

// Exercício 4
enum setorTipo {
  MKT="marketing",
  VEN="vendas",
  FIN="financeiro",
}
type colaboradores={
  nome:string,
  salario:number,
  setor:setorTipo,
  presencial:boolean
}
const arrayColaboradores:colaboradores[] =[
  { nome: "Marcos", salario: 2500, setor:setorTipo.MKT, presencial: true },
  { nome: "Maria" ,salario: 1500, setor:setorTipo.VEN, presencial: false},
  { nome: "Salete" ,salario: 2200, setor:setorTipo.FIN, presencial: true},
  { nome: "João" ,salario: 2800, setor:setorTipo.MKT, presencial: false},
  { nome: "Josué" ,salario: 5500, setor:setorTipo.FIN, presencial: true},
  { nome: "Natalia" ,salario: 4700, setor:setorTipo.VEN, presencial: true},
  { nome: "Paola" ,salario: 3500, setor:setorTipo.MKT, presencial: true }
]
function pessoasColaboradorasMKT(equipe:colaboradores[]):colaboradores[]{
 const equipeMKT:colaboradores[]=equipe.filter((item:colaboradores)=>{
  return ((item.setor === setorTipo.MKT)&&(item.presencial===true))
 })
  return equipeMKT
}

console.log(pessoasColaboradorasMKT(arrayColaboradores))

// Exercício 5

type usuario = {
  name:string,
  email:string,
  role:string
}

const arrayUsuarios:usuario[]=[
	{name: "Rogério", email: "roger@email.com", role: "user"},
	{name: "Ademir", email: "ademir@email.com", role: "admin"},
	{name: "Aline", email: "aline@email.com", role: "user"},
	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
	{name: "Adilson", email: "adilson@email.com", role: "user"},  
	{name: "Carina", email: "carina@email.com", role: "admin"}      
] 

function administrador(equipe:usuario[]):string[]{
  const adminFilter:string[]=equipe.filter((item:usuario)=>{
    return item.role === "admin"
  }).map((item=>{
    return item.email
  }))
  return adminFilter
}

console.log(administrador(arrayUsuarios))

// Exercício 6

// type cliente ={
//   cliente:string,
//   saldoTotal:number,
//   debitos:number[]
// }
// const clientes:cliente[]=[
// 	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
// 	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
// 	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
// 	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
// 	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
// 	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
// ]
// function devedores(clientes:cliente[]):cliente[]{
  
//   return 
// }