import React from "react";
import {useNavigate} from "react-router-dom"

export const AplicationForm = ()=>{
  const navigate = useNavigate()

  const goBack = ()=>{
    navigate(-1)
  }

  return(
    <div>
      eu sou a application
      <button onClick={goBack}>Voltar</button>
    </div>
  );
};