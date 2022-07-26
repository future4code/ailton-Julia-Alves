import React from "react"
import styled from "styled-components"
import {useNavigate} from "react-router-dom"

const HeaderContainer = styled.div`
  background-color: black;
  color:white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 10vh;
  h1 {
font-family: 'Rubik', sans-serif;
font-size: 6rem;
color: #E4E5E6; 
background: linear-gradient(to right, 	#47ABCC, #02A4D3, 	#0095B7);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
text-shadow: 0 0 8vh #33FFFF
}
h2{
font-family: 'Rubik', sans-serif;
font-size: 2rem;
color: #E4E5E6; 
background: linear-gradient(to right,#47ABCC, #02A4D3 );
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
}
:hover h2{
  cursor: pointer;
  border-bottom: 1px solid #02A4D3;
}
`
const Header = ()=>{
  const navigate = useNavigate()

  const goToHomepage = ()=>{
    navigate("/")
  }
  const goToListTrip = ()=>{
    navigate("/trips/list")
  }
  const goToLogin = ()=>{
    navigate("/login")
  }
  return(
    <HeaderContainer> 
      <h1>LABE-X</h1>
      <h2 onClick={goToHomepage}>Home</h2>
      <h2 onClick={goToListTrip}>Viagens</h2>
      <h2 onClick={goToLogin}>Login</h2>
    </HeaderContainer>
  )
}
export default Header