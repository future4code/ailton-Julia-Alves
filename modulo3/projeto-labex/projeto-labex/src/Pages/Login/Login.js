import React from "react";
import {useNavigate} from "react-router-dom"

export const Login = ()=>{
  const navigate = useNavigate()

  const goToDetails = ()=>{
    navigate("/about")
  }
  return(
    <div>
      eu sou a login
      <button onClick={goToDetails}>Trip Details</button>
    </div>
  );
};