import React, { Component } from 'react';
import ListaUsuario from './Components/ListaUsuario/ListaUsuario'
import TelaUsuario from './Components/TelaUsuario/TelaUsuario'
import styled from 'styled-components';

const PaginaInicial = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
height: 500px;
width: 100%;
margin: 0;
padding: 0;
`
class App extends React.Component{
  state={
    tela:"tela1",
    cadastro:[],
  };
  goTela1 =()=>{
    this.setState({
      tela:"tela1"
    });
  };
  goTela2 = ()=>{
    this.setState({
      tela:"tela2"
    });
  };
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
    };
  };
  render(){
  return (
    <PaginaInicial>
    {this.escolherTela()}
    </PaginaInicial>
  )}};
export default App;
