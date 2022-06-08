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
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post
          nomeUsuario={'marina'}
        fotoUsuario={perfil1}
          fotoPost={paisagem1}
        />
        <Post
          nomeUsuario={'júlia'}
          fotoUsuario={perfil2}
          fotoPost={paisagem2}
        />
      </MainContainer>
    );
  }
}

export default App;
