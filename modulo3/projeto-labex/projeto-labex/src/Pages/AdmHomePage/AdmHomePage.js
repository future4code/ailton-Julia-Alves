import React from "react";
import {useNavigate} from "react-router-dom"

export const AdmHomePage = ()=>{
  const navigate = useNavigate()

  const goToCreat = ()=>{
    navigate("/admin/trips/create")
  }
  const goToDetails = ()=>{
    navigate("/admin/trips/:id")
  }
  return(
    <div>
      eu sou a adm home page
      <button onClick={goToCreat}> Creat</button>
      <button onClick={goToDetails}>details</button>
    </div>
  );
};