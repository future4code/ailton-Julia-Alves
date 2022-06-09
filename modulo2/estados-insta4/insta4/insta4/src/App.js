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
    }
   ]};
   adicionarPost = () =>{
    const postNovo = this.state.ValorImput
    const novoPost =[postNovo,...this.state.card]
    this.setState({card:novoPost})
    this.setState({ValorImput:""})
  }
  onChangeImputPost = (xuxu)=>{
    this.setState({ValorImput:xuxu.target.value})
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
       <imput>
         value ={this.state.ValorImput}
         onChange = {this.onChangeImputPost}
         placeholder ={"nome"}
       </imput>
      <button onClick={this.adicionarPost}>Adiciona Post</button>
      </MainContainer>
    );
  }
}

export default App;
