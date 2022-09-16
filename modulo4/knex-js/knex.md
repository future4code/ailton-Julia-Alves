### Exercício 1
a) o metodo raw permite que enviemos uma query para o banco usando a linguagem SQL diretamente, a resposta que temos é a que queremos mais informações do banco de dados;
b) a query da funçao é:

```
const buscaAtor =  async (name:string): Promise<any> =>{
    const resultado = await connection.raw(`
    SELECT * FROM Actor WHERE nome = "${name}"
    `)
    return resultado[0][0].nome
}
```
c) a query da função é:
```
const countGender = async (gender:string): Promise<any> =>{
    const genderCount = await connection.raw(`
    SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}";`)
    return genderCount[0][0].count
}
```

### Exercício 2 
a) a query da funçao é:
```
const atualizaSalary =  async (id:string,salary:number): Promise<any> =>{
    await connection("Actor").update({
        salary:salary
    }).where("id",id);
    
};

(async()=>{await atualizaSalary("002", 2000)})()
```
b)a query da função é:
```
const deleteActor =  async (id:string): Promise<any> =>{
    await connection("Actor").where("id",id).delete()
};

(async()=>{await deleteActor("002")})()
```
c)a query da funçao:
```
const mediaSalario =  async (gender:string): Promise<any> =>{
    const resultado = await connection("Actor").avg("salary as media").where("gender",gender)
    return resultado[0].media
};
```
### Exercício 3
a) a query do endpoint é:
```
app.get("/actor/:id", async (req,res) => {
    try {
      const id = req.params.id;
      const actor = await connection.raw(`
      SELECT * FROM Actor WHERE id=${id};
      `)
      res.status(200).send(actor[0])
    } catch (err:any) {
        res.status(res.statusCode || 500).send({message:err.message})
    }
  });
```
b) a query do endpoint é:
```
app.get("/actor", async (req,res) => {
    try {
      const gender = req.query.gender;
      const actor = await connection.raw(`
      SELECT COUNT(*) FROM Actor WHERE gender=${gender};
      `)
      res.status(200).send(actor)
    } catch (err:any) {
        res.status(res.statusCode || 500).send({message:err.message})
    }
  });
  ```
### Exercício 4
<!-- não consegui fazer ainda, mas vou continuar para relações e tirar dúvidas depois -->
