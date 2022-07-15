import React, {useState} from "react";
import {useNavigate, useParams} from "react-router-dom"
import Header from "../Header/Header";
import styled from "styled-components";
import SpaceBackground from "../Home/spacebackground.jpg"
import axios from "axios";

const ApplicationContainer = styled.div`
  background-image: url(${SpaceBackground}) ;
  background-size: cover;
  background-repeat: no-repeat;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const AplicationForm = ()=>{
  const navigate = useNavigate()
  const pathParams = useParams()
  const [form,setForm]= useState({name:"",age:"",applicationText:"",profession:"",country:""})

  const goBack = ()=>{
    navigate(-1)
  }
  const onChangeInput = (event)=>{
    const {name,value} =event.target
    setForm({...form,[name]: value})
  }
  const fazerApplication = (event)=>{
    event.preventDefault()
    const url =`https://us-central1-labenu-apis.cloudfunctions.net/labeX/julia-moniz-ailton/trips/${pathParams.id}/apply`
    console.log(form)
    axios.post(url,form)
    .then((res)=>{
      console.log(res.data)
      setForm(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  return(
    <div>
      <Header/>
      <ApplicationContainer>
        <form onSubmit={fazerApplication}>
        <input name="name" value={form.name} onChange={onChangeInput} placeholder="Nome" required></input>
        <input name="age" value={form.age} onChange={onChangeInput} placeholder="Idade" required></input>
        <input name="applicationText" value={form.applicationText} onChange={onChangeInput} placeholder="Texto de Candidatura" required></input>
        <input name="profession" value={form.profession} onChange={onChangeInput} placeholder="Profissão" required></input>
        <input name="country" value={form.country} onChange={onChangeInput} placeholder="País de origem" required pattern={"[A-Z]{3}"} title={"Código do país com 3 letras maiúsculas"}></input>
      <button>Fazer Aplicação</button>
      </form>
      <button onClick={goBack}>Voltar</button>
      </ApplicationContainer>
    </div>
  );
};