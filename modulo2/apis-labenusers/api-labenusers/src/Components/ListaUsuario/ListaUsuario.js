import React from "react"
import axios from "axios"
import styled from "styled-components"

export const CardUsuario = styled.div `
border:1px solid black;
padding:10px;
margin:10px;
width:300px;
display:flex;
justify-content: space-between;
`
const Box2 = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: orange;
height: 500px;
width: 60%;
gap: 8px;
border-radius: 2rem;
`

export default class ListaUsuario extends React.Component{
 state={
  usuario:[],
 } 
  componentDidMount(){
    this.pegarUsuarios()
  }  
  pegarUsuarios = ()=>{
      const url= "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
      
      axios.get(url,{
        headers:{
          Authorization: 'julia-moniz-ailton'
        }
      })
      .then((res)=>{
        this.setState({usuario:res.data})
      })
      .catch((erro)=>{
        alert("Ocorreu um problema, tente noamente")
      })
    };
    deletarUsuario = (id)=>{
      const url= `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
      axios.delete(url,{
        headers:{
          Authorization: 'julia-moniz-ailton'
        }
      })
      .then((res)=>{
        alert("Usuário deletado com sucesso")
        this.pegarUsuarios()
      })
      .catch((erro)=>{
        alert("Ocorreu um erro")
      })
    }
    
    render(){
      const listaUsuario = this.state.usuario.map((dados)=>{
        return (
          <CardUsuario key={dados.id}>
            {dados.name}
            <button onClick={()=>this.deletarUsuario(dados.id)}>X</button>
          </CardUsuario>
        )
      })
      return(
        <Box2>
          <h1>Tela de detalhes:</h1>
          <button onClick={this.props.goTela1}>Trocar de tela</button>
          {listaUsuario}
          <div>
            <h3>Procura Usuário</h3>
            <input/>
            <button>Salvar edição</button>
          </div>
        </Box2>
      )
    }
  }