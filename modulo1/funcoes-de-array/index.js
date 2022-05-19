// Atividade Callback e funções de array 
/*Atividade de interpretação
1)a) não sei ainda 
2)a) [Amanda Rangel, Laís Petra, Letícia Chijo]
3)a) [Mandi,Laura]
*/
//Atividade de escrita 
//1)
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]
//a)  
  const apenasNomes = pets.map((item, index, array) => {
     return item.nome
  })
  
  console.log(apenasNomes)
//b)
const apenasSalsicha = pets.filter((item, index, array) => {
    return item.raca === "Salsicha"
 })
 
 console.log(apenasSalsicha)
//c) 
const descontoPoodles = pets.filter((item,index,array)=>{
    return item.raca==="Poodle"}).map((item,index,array)=>{
        return (`Você ganhou um cupom de desconto de 10% para tosar ${item.nome}`)
    })
console.log(descontoPoodles)
//2)
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]
//a)
const apenasNomes1 = produtos.map((item, index, array) => {
    return item.nome
 })
 
 console.log(apenasNomes1)
 //b - não sei ainda

 //c
 const apenasBebidas = produtos.filter((item, index, array) => {
    return item.categoria === "Bebidas"
 })
 
 console.log(apenasBebidas)
//d)
const apenasYpe = produtos.filter((item, index, array) => {
    return item.nome.includes("Ypê")
 })
 console.log(apenasYpe) 
//e)
const apenasYpe2 = produtos.filter((item, index, array) => {
    return item.nome.includes("Ypê")
 }).map((item,index,array)=> {
     return `Compre ${item.nome} por ${item.preco}`
 })
 
 console.log(apenasYpe2) 