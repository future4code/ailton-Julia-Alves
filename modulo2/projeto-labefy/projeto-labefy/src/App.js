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
    nomeInput:"",
    musicas:{},
    nomePlaylist:"", 
    nomeMusica:"",
    artistaMusica:"",
    urlMusica:""
  }
  onChangeInput=(event)=>{
    this.setState({nomeInput:event.target.value})
  }
  onChangeMusica=(event)=>{
    this.setState({nomeMusica:event.target.value})
  }
  onChangeArtista=(event)=>{
    this.setState({artistaMusica:event.target.value})
  }
  onChangeUrl=(event)=>{
    this.setState({urlMusica:event.target.value})
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
  criarMusica =()=>{
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId/tracks"
    const body= {
      name:this.state.nomeMusica,
      artist:this.state.artistaMusica,
      url:this.state.urlMusica
    }
    axios.post(url,body,{
      headers:{
        Authorization: "julia-moniz-ailton"
      }
    })
    .then((res)=>{
      alert("Música cadastrada com sucesso")
      this.setState({nomeMusica:"",
    artistaMusica:"",
    urlMusica:""})
      console.log(res)
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
  pesquisaPlaylist=(id,nome)=>{
    const url= `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`
    axios.get(url,{
      headers:{
        Authorization: "julia-moniz-ailton"
      }
    })
    .then((res)=>{
      this.setState({musicas:res.data.result})
      this.setState({nomePlaylist:nome})
    })
    .catch((err)=>{
      console.log(err)
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
      apagarPlaylist={this.apagarPlaylist}
      pesquisaPlaylist={this.pesquisaPlaylist}
      />
      <Menu nomeMusica={this.state.nomeMusica}
      artistaMusica={this.state.artistaMusica}
      urlMusica={this.state.urlMusica}
      nomePlaylist={this.state.nomePlaylist}
      onChangeMusica={this.onChangeMusica}
      onChangeArtista={this.onChangeArtista}
      onChangeUrl={this.onChangeUrl}
      criarMusica={this.criarMusica}/>
    </Main>
    <FooterPlay/>
  </AppContainer>
  )
}
}



