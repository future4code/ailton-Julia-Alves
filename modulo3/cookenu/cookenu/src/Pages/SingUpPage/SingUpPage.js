import React from "react";
import { ScreamContainer,LoginImg } from "../LoginPage/styled";
import singuplogo from "../../Assets/logosingup.jpg"
import SingUpForm from "./SingUpForm";

const SingUpPage = ()=>{
  return(
    <ScreamContainer>
      <LoginImg src={singuplogo}/>
      <SingUpForm/>
    </ScreamContainer>
  );
};
export default SingUpPage;