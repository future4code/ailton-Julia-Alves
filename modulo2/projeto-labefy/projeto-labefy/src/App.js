import React from "react";
import styled from "styled-components";
import FooterPlay from "./Componentes/FooterPlay/FooterPlay";
import SideBar from "./Componentes/Sidebar/SideBar";
import Menu from "./Componentes/Menu/Menu";
import axios from "axios";

const AppContainer = styled.div `
  margin:0;
  padding: 0;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: black;
`
const Main = styled.div`
  width: 100%;
  height: 85vh;
  display: flex;
  flex-direction: row;
`
export default class App extends React.Component {
  state={
    playlist:[],
    nomeInput:""
  }
  onChangeInput=(event)=>{
    this.setState({nomeInput:event.target.value})
  }
  componentDidMount(){
    this.getAllPlaylist()
  }
  getAllPlaylist = ()=>{
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
    axios.get(url,{
      headers:{
        Authorization:"julia-moniz-ailton"
      }
    })
    .then((res)=>this.setState({playlist:res.data.result.list}))
    .catch((err)=>console.log(err.response))
  }
  criarPlaylist =()=>{
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
    const body= {
      name:this.state.nomeInput
    }
    axios.post(url,body,{
      headers:{
        Authorization: "julia-moniz-ailton"
      }
    })
    .then((res)=>{
      alert("Playlist cadastrada com sucesso")
      this.setState({nomeInput:""})
      this.getAllPlaylist()
    })
    .catch((err)=>{
      alert(err.response.data.message)
    })
  }
  apagarPlaylist =(id)=>{
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
    axios.delete(url,{
      headers:{
        Authorization: "julia-moniz-ailton"
      }
    })
    .then((res)=>{
      alert("Playlist deletada com sucesso")
      this.getAllPlaylist()
    })
    .catch((err)=>{
      alert("Ocorreu um erro, tente novamente")
    })
  }
  render(){
  return (
  <AppContainer>
    <Main>
      <SideBar 
      playlist={this.state.playlist} 
      nomeInput={this.state.nomeInput} onChangeInput={this.onChangeInput}
      criarPlaylist={this.criarPlaylist}
      apagarPlaylist={this.apagarPlaylist}/>
      <Menu playlist={this.state.playlist}/>
    </Main>
    <FooterPlay/>
  </AppContainer>
  )
}
}



