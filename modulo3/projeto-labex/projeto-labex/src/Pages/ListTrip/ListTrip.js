import React, { useState, useEffect } from "react";
import Header from "../Header/Header"
import {useNavigate} from "react-router-dom"
import axios from "axios";
import styled from "styled-components";
import SpaceBackground from "../Home/spacebackground.jpg"


const ListTripContainer = styled.div`
  background-image: url(${SpaceBackground}) ;
  background-size: cover;
  background-repeat: no-repeat;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const DIVQUALQUER = styled.div`
  background: linear-gradient(to right, 	#47ABCC, #02A4D3, 	#0095B7);
  box-shadow: rgb(0 0 0 / 30%) 0px 4px 8px 0px;
    padding: 10px 20px;
    border-radius: 4px;
    margin: 50px 0px;
    width: 60%;
    opacity: 0.7;
`
const DIVQUALQUER2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  width: 70%;
`
export const ListTrip = ()=>{
const [trips,setTrips]=useState()
const navigate = useNavigate()

const goToApplication = (id)=>{
  navigate(`/trips/application/${id}`)
}
useEffect(()=>{
  getTrips()
},[]);
const getTrips=()=>{
  const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/julia-moniz-ailton/trips"
  axios.get(url)
  .then((res)=>{
    console.log(res)
    setTrips(res.data.trips)
  })
  .catch((err)=>console.log(err))
}
  return(
    <div>
      <Header/>
      <ListTripContainer>
      <DIVQUALQUER2>
        {trips?.map((dado)=>{
          return <DIVQUALQUER key={dado.id}>
          <p>{dado.name}</p>
          <p>{dado.descrition}</p>
          <p>{dado.planet}</p>
          <p>{dado.date},{dado.durationInDays}</p>
          <button onClick={()=>{goToApplication(dado.id)}}> Quero me candidatar</button>
          </DIVQUALQUER>
        })}
      </DIVQUALQUER2>
      </ListTripContainer>
    </div>
  );
};