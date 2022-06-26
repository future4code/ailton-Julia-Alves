import React from "react";
import { SideBox,ListaCard } from "./SideBar.styled";

export default class SideBar extends React.Component{
  render(){
    const listaPlaylist= this.props.playlist.map((dados)=>{
      return <ListaCard key={dados.id}>{dados.name}
      <button onClick={()=>this.props.apagarPlaylist(dados.id)}>x</button>
      </ListaCard>
     })
    return(
      <SideBox>
        <h1>Labefy</h1>
        <label>Criar Playlist:</label>
        <input 
        placeholder={"Playlist Name"}
        value={this.props.nomeInput}
        onChange={this.props.onChangeInput}/>
        <button 
        onClick={this.props.criarPlaylist}>Adicionar</button>
        {listaPlaylist}
      </SideBox>
    )
  }
}