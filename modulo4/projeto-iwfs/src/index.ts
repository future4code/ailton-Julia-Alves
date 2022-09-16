import express, {Express, Request, Response} from "express"
import { AddressInfo } from "net";
import cors from "cors"
import { users } from "./users";

const app:Express = express()

app.use(express.json())
app.use(cors())

app.post("/users/create", (req:Request, res:Response)=>{
  try{
    const {name, CPF, dateOfBirthAsString}= req.body
    
    const [ day,month,year]=dateOfBirthAsString.split("/")

    const dateOfBirth:Date = new Date(`${year}-${month}-${day}`)

    const age:number = Date.now()-dateOfBirth.getTime()

    const ageInYears:number = age/1000/60/60/24/365

  if(ageInYears<18){
    res.statusCode=406
    throw new Error("idade deve ser maior que 18 anos")
  }
    users.push({
      name,
      CPF,
      dateOfBirth,
      balance:0,
      statement:[]
    })
    res.status(201).send("Conta criada com sucesso")
  }catch (error){
    res.status(400).send("erro")
  }
})

app.get("/users/all",(req:Request,res:Response)=>{
  try{
    if(!users.length){
      res.statusCode=404
      throw new Error("Nenhuma conta encontrada")
    }
    res.status(200).send(users)
  }catch(error){
    res.status(400).send("erro")
  }
})

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;