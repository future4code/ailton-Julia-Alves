import React from "react"
import axios from "axios";
import styled from "styled-components";

const Box = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: orange;
height: 500px;
width: 60%;
gap: 8px;
border-radius: 2rem;
`
export default class TelaUsuario extends React.Component{
  state ={
    inputNome:"",
    inputEmail:""
  };  
  onChangeNome = (event)=>{
    this.setState({inputNome:event.target.value})
  };
  onChangeEmail = (event)=>{
    this.setState({inputEmail:event.target.value})
  };
  criarUsuario = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    const body = {
      name: this.state.inputNome,
      email: this.state.inputEmail
    }
    axios
      .post(url,body,{
          headers: {
            Authorization: 'julia-moniz-ailton'
          }
    })
      .then(response => {
        alert('Usuario Criado')
        this.setState({
          name:"",
          email:""
        })
      })
      .catch(erro => {
        alert(erro.response.data.message)
        this.setState({
          name:"",
          email:""
        })
      })
  }
  render(){
      return(
        <Box>
            <h1>Cadastro do Usuário</h1>
            <input type={"text"} placeholder={"Nome"} value={this.state.inputNome} onChange={this.onChangeNome}/>
            <input type={"text"} placeholder={"E-mail"} value={this.state.inputEmail} onChange={this.onChangeEmail}/>
            <button onClick={this.criarUsuario}>Criar Login</button>
            <button onClick={this.props.goTela2}>Trocar de tela</button>
        </Box>
      )
    }
  }