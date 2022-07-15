import React from "react";
import {useNavigate} from "react-router-dom"


export const TripDetails = ()=>{
  const navigate = useNavigate()

  const goBack = ()=>{
    navigate(-1)
  }

  return(
    <div>
      eu sou a trip details 
      <button onClick={goBack}>Voltar</button>
    </div>
  );
};