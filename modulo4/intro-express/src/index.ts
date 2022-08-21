import express, {Request, Response} from "express";
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors())

// Exercício 1
app.get("/teste", (req:Request, res:Response)=>{
  res.send("Hello from Express")
})

// Exercício 2
// dúvida: os tipos tem que ter letra maiuscula?
type User={
  id:number,
  name:string,
  phone:number,
  email:string,
  website:string
}
// Exercício 3

const usuarios:User[]=[
  {
    id:1,
    name:"Júlia",
    phone:981261280,
    email:"juliamonizaa@gmail.com",
    website:"jumoniz.com.br"
  },
  {
    id:2,
    name:"Myllena",
    phone:999887345,
    email:"myllena@hotmail.com",
    website:"myworld.com.br"
  },
  {
    id:3,
    name:"Astrodev",
    phone:22335554446,
    email:"astrodev@hotmail.com",
    website:"astrodev.com.br"
  }
]
// Exercício 4
app.get("/users",(req:Request, res:Response)=>{
  res.send(usuarios)
})
// Exercício 5
type Post = {
  id:number,
  title:string,
  body:string,
  userId:string
}
// Exercício 6 
const post:Post[]=[
  {
    id:1,
    title:"Winx",
    body:"Sei que você vai querer ser UMA DE NÓS!!",
    userId:"XXXXW87687"
  },
  {
    id:2,
    title:"Bob Esponja",
    body:"Vive num abacaxi e mora no mar? Bob Esponja Calça Quadrada",
    userId:"BBBPATRICK2344"
  },
  {
    id:3,
    title:"Caillou",
    body:"Eu tenho só 4 anos, todo dia crescendo, xeretando. sou caillou",
    userId:"SOUEUCC3356"
  }
]
// Exerício 7 
app.get("/post", (req:Request,res:Response)=>{
  res.send(post)
})
// Exercício 8
app.get("/post/:id", (req:Request,res:Response)=>{
  const id:number = Number(req.params.id)
  const postID = post.filter((post)=>{
    return post.id === id
  })
  res.send(postID)
})
app.listen(3003, () => {
  console.log("Server is running in http://localhost:3003")
})