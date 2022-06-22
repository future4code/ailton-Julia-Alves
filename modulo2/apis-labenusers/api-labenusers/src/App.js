import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';


class TelaUsuario extends Component{
  render(){
    return(
      <div>
        <h1>Cadastro do Usuário</h1>
        <section>
          <label>
            Nome:
            <input type={"text"} placeholder={"Nome"} value={this.props.inputNome} onChange={this.props.onChangeNome}/>
            Email:
            <input type={"text"} placeholder={"E-mail"} value={this.props.inputEmail} onChange={this.props.onChangeEmail}/>
          </label>
        </section>
        <button onClick={this.props.criarUsuario}>Criar Login</button>
        <button onClick={this.props.goTela2}>Trocar de tela</button>
      </div>
    )
  }
}
class ListaUsuario extends Component{
  // get all user
  render(){
    return(
      <div>
        <h1>Tela de detalhes:</h1>
        <button onClick={this.props.goTela1}>Trocar de tela</button>
        <div>
          <h3>Procura Usuário</h3>
          <input/>
          <button>Salvar edição</button>
        </div>
      </div>
    )
  }
}
class App extends React.Component{
  state={
    tela:"tela1",
    cadastro:[],
    inputNome:"",
    inputEmail:""
  }
  goTela1 =()=>{
    this.setState({
      tela:"tela1"
    })
  }
  goTela2 = ()=>{
    this.setState({
      tela:"tela2"
    })
  }
  onChangeNome = (event)=>{
    this.setState({inputNome:event.target.value})
    console.log(this.state.inputNome)
  
  }
  onChangeEmail = (event)=>{
    this.setState({inputEmail:event.target.value})
    
  }
  criarUsuario = () => {
    const body = {
      name: this.state.inputNome,
      email: this.state.inputEmail
    }
    axios
      .post(
        'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',
        body,
        {
          headers: {
            Authorization: 'julia-moniz-ailton'
          }
        }
      )
      .then(response => {
        console.log(response)
        // this.getDados();
        alert('Usuario Criado')
      })
      .catch(erro => {
        console.log(erro)
        alert('Erro ao cadastrar usuario')
      })
  }
  escolherTela = ()=>{
    if(this.state.tela==="tela1"){
      return <TelaUsuario 
      goTela2={this.goTela2} 
      inputNome={this.state.inputNome} 
      inputEmail={this.state.inputEmail} 
      onChangeNome={this.onChangeNome} 
      onChangeEmail={this.onChangeEmail}
      criarUsuario={this.criarUsuario}
      />
    }else if(this.state.tela==="tela2"){
      return <ListaUsuario goTela1={this.goTela1}/>
    }else{
      console.log("deu ruim")
    }
  }
  render(){
  return (
    <div>
    {this.escolherTela()}
    </div>
  );
}
}

export default App;
