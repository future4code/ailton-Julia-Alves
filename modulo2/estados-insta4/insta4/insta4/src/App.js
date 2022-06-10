import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';
import perfil1 from './img/perfil1.jpg';
import perfil2 from './img/perfil2.jpg';
import paisagem1 from './img/paisagem1.jpg';
import paisagem2 from './img/paisagem2.webp';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const Formulario = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
gap: 4px;
border: 1px solid grey;
width: 300px;
margin-bottom: 15px;
padding: 4px 0;
`
const InputStyle = styled.input`
width: 90%;
`

class App extends React.Component {
 state = {
   card:[
     {
      nomeUsuario:'paulinha',
      fotoUsuario:'https://picsum.photos/50/50',
      fotoPost:'https://picsum.photos/200/150'
    },
    {
      nomeUsuario:'marina',
      fotoUsuario: perfil1,
      fotoPost:paisagem1
    },
    {
      nomeUsuario:'júlia',
      fotoUsuario: perfil2,
      fotoPost:paisagem2
    },
  ],
    valorInputNome:"",
    valorInputFotoUsuario:"",
    valorInputFotoPost:""  
  };
   adicionarPost = () =>{
    const postNovo = {
      nomeUsuario: this.state.valorInputNome,
      fotoUsuario:this.state.valorInputFotoUsuario,
      fotoPost:this.state.valorInputFotoPost
    };
    const novoPost =[postNovo,...this.state.card]

    this.setState({card:novoPost})
    this.setState({
      valorInputNome:"",
      valorInputFotoUsuario:"",
      valorInputFotoPost:""
    });
  };
  onChangeInputNome = (event)=>{
    this.setState({valorInputNome:event.target.value})
  };
  onChangeInputFotoUsuario = (event)=>{
    this.setState({valorInputFotoUsuario:event.target.value})
  };
  onChangeImputPost = (event) =>{
    this.setState({valorInputFotoPost:event.target.value})
  }
  render() {
      const postCards = this.state.card.map((card) => {
        return (
          <Post
          nomeUsuario={card.nomeUsuario}
          fotoUsuario={card.fotoUsuario}
          fotoPost={card.fotoPost}
        />
        );
      });
    return (
      <MainContainer>
       <div>{postCards}</div>
      <Formulario>
       <InputStyle
          value={this.state.valorInputNome}
          onChange={this.onChangeInputNome}
          placeholder={"Nome"}
       />
       <InputStyle
          value={this.state.valorInputFotoUsuario}
          onChange={this.onChangeInputFotoUsuario}
          placeholder={"Foto Usuário"}
       />
       <InputStyle
          value={this.state.valorInputFotoPost}
          onChange={this.onChangeImputPost}
          placeholder={"Foto do Post"}
       />
      <button onClick={this.adicionarPost}>Adiciona Post</button>
      </Formulario>
      </MainContainer>
    );
  }
}

export default App;
