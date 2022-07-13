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
export const Home = ()=>{
  return(
    <div> 
      <Header/>
      <HomeContainer>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ex at nulla voluptatum quidem quis unde quasi nostrum, sed iste repellat omnis nihil minima. Architecto autem quas exercitationem? Ipsa, quisquam.</p>
      </HomeContainer>
    </div>
  )
}
