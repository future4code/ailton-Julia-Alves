import React from "react";
import {useNavigate} from "react-router-dom"

export const CreatTrip = ()=>{
  const navigate = useNavigate()

  const goBack = ()=>{
    navigate(-1)
  }

  return(
    <div>
      eu sou a creat trip 
      <button onClick={goBack}>Voltar</button>
    </div>
  );
};