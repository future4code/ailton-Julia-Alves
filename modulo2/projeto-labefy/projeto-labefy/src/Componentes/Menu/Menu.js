import React from "react";
import { MenuBox } from "./Menu.styled";

export default class Menu extends React.Component{
  render(){
     
    return(
      <MenuBox>
        <h1>{this.props.nomePlaylist}</h1>
        <label>Adicione música:</label>
        <div>
        <input 
        type="text" 
        placeholder="Nome da música"
        value={this.props.nomeMusica}
        onChange={this.props.onChangeMusica}
        />
        <input
         type="text" 
         placeholder="Nome do artista"
         value={this.props.artistaMusica}
        onChange={this.props.onChangeArtista}/>
        <input
         type="text" 
         placeholder="Url da música"
         value={this.props.urlMusica}
        onChange={this.props.onChangeUrl}/>
        </div>
        <button onClick={this.props.criarMusica}>Adicionar</button>
      </MenuBox>
    )
  }
}