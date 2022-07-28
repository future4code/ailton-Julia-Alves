import React from "react";
import { ScreamContainer,LoginImg, DivTESTE } from "../LoginPage/styled";
import loginlogo from "../../Assets/login.jpeg"
import LoginForm from "./LoginForm";
import { useNavigate } from "react-router-dom";
import { goToSingUp } from "../../Routes/cordinator";

const LoginPage = ()=>{
  const navigate = useNavigate()
  return(
    <ScreamContainer>
      {/* <LoginImg src={loginlogo}/> */}
      <DivTESTE>
      <h1>LOGIN</h1>
      <LoginForm/>
      <button onClick={()=>goToSingUp(navigate)}>Não possui conta? Cadastre-se</button>
      </DivTESTE>
    </ScreamContainer>
  );
};
export default LoginPage;