import React from "react"
import styled from "styled-components"
import Header from "../Header/Header"
import SpaceBackground from "../Home/spacebackground.jpg"

const HomeContainer = styled.div`
  background-image: url(${SpaceBackground}) ;
  background-size: cover;
  background-repeat: no-repeat;
  height: 90vh;
`
const HomeDiv = styled.div`
  background-color: #0095B7;
  display: flex;
  flex-direction: column;
  width: 40%;
  height: 30vh;
  margin-left: 150px;
  opacity: 0.4;
  border-radius: 9px;
  box-shadow: 0 0 12vh #33FFFF
`
export const Home = ()=>{
  return(
    <div> 
      <Header/>
      <HomeContainer>
        <br/>
        <br/>
        <br/>
        <HomeDiv>
        <h1>Sobre nós</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ex at nulla voluptatum quidem quis unde quasi nostrum, sed iste repellat omnis nihil minima. Architecto autem quas exercitationem? Ipsa, quisquam.</p>
        </HomeDiv>
      </HomeContainer>
    </div>
  )
}
