import express, {Request, Response} from "express";
import cors from "cors"

import { AddressInfo } from "net";

const app = express();

app.use(express.json());
app.use(cors())

// Exercício 1
app.get("/ping", (req:Request, res:Response)=>{
  res.send("PONG!")
})
// Exercício 2
type Afazer={
  userId:number,
  id:number,
  title:string,
  completed:boolean
}
// Exercício 3
const atividade:Afazer[]=[
  {
    "userId": 1,
    "id": 1,
    "title": "Teste1",
    "completed": true
  },
  {
    "userId": 1,
    "id": 2,
    "title": "Teste2",
    "completed": false
  },
  {
    "userId": 1,
    "id": 3,
    "title": "Teste3",
    "completed": false
  }
]

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;