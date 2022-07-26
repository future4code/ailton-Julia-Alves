import React from "react";
import styled from "styled-components";
import Header from "../Header/Header";
import {useNavigate} from "react-router-dom"
import SpaceBackground from "../Home/spacebackground.jpg"

const LoginContainer = styled.div`
  background-image: url(${SpaceBackground}) ;
  background-size: cover;
  background-repeat: no-repeat;
  height: 90vh;
  display: flex;
  flex-direction: column;
`
const LoginCard = styled.div`
   background: linear-gradient(to right, 	#47ABCC, #02A4D3, 	#0095B7);
   border-radius: 12px;
   box-shadow: 0 0 9vh #33FFFF;
   opacity: 0.7;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  height: 30vh;
  margin: 50px;
  gap: 10px;
  input{
    width: 40%;
    border-radius: 9px;
    
  }
`

export const Login = ()=>{
  const navigate = useNavigate()
  
  const goToAdminHome = ()=>{
    navigate("/admin/trips/list")
  }
  return(
    <div>
      <Header/>
      <LoginContainer>
        <LoginCard>
        <h1>Login</h1>
        <input placeholder="E-mail"/>
        <input placeholder="Senha"/>
        <button onClick={goToAdminHome}>Entrar</button>
        </LoginCard>
      </LoginContainer>
    </div>
  );
};