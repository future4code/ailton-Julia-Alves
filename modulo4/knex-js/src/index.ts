import express, {Express} from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import knex from "knex"
import dotenv from "dotenv"


dotenv.config()

const app: Express = express();

app.use(express.json());
app.use(cors());

// configuração para acessar o bano de dados
const connection = knex({
    client:"mysql",
    connection:{
        host: process.env.DB_HOST,
        port: 3306,
        user: process.env.DB_USER,
        database: process.env.DB_DATABASE,
        password: process.env.DB_PASSWORD
    }
});

// const mediaSalario =  async (gender:string): Promise<any> =>{
//     const resultado = await connection("Actor").avg("salary as media").where("gender",gender)
//     return resultado[0].media
// };

// (async()=>{console.log(await mediaSalario("male"))})()
// app.get("/actor", async (req,res) => {
//     try {
//       const gender = req.query.gender;
//       const actor = await connection.raw(`
//       SELECT COUNT(*) FROM Actor WHERE gender=${gender};
//       `)
//       res.status(200).send(actor)
//     } catch (err:any) {
//         res.status(res.statusCode || 500).send({message:err.message})
//     }
//   });

// app.get("/actor/:id", async (req,res) => {
//     try {
//       const id = req.params.id;
//       const [actor] = await connection.raw(`
//       SELECT * FROM Actor WHERE id=${id};
//       `)
//       res.status(200).send(actor)
//     } catch (err:any) {
//         res.status(res.statusCode || 500).send({message:err.message})
//     }
//   });

// app.get("/getUsers",async(req,res)=>{
//     try{
//         const allUsers = await connection.raw(`
//         SELECT * FROM user
//         `);
//         res.status(200).send(allUsers[0])
//     }catch(error:any){
//         res.status(res.statusCode || 500).send({message:error.message})
//     }
// })

// app.post("/createUser", async(req,res)=>{
//     try{
//         const{nome,email,idade,telefone,cidade}=req.body;

//         if(!nome || !email || !idade || !telefone || !cidade){
//             res.statusCode=404
//             throw new Error("Nao pode mandar valores vazios")
//         }
//         const insertUser= await connection.raw(`
//             INSERT INTO user (nome,email,idade,telefone,cidade)
//             values ("${nome}","${email}",${idade},"${telefone}","${cidade}");
//             `)
//         res.status(201).send(`O usuario ${nome} foi criado com sucesso`)

//     }catch(error:any){
//         if(error.sqlMessage.includes("Duplicate entry")){
//             res.status(401).send({message:"O email já esta cadastrado no banco de dados"})
//         }
//         res.status(res.statusCode || 500).send({message:error.message})
//     }
// })



const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});