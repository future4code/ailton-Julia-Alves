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
`
export const ListTrip = ()=>{
const [trips,setTrips]=useState()
const navigate = useNavigate()

const goToApplication = ()=>{
  navigate("/trips/application")
}
useEffect(()=>{
  getTrips()
},[]);
const getTrips=()=>{
  const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/julia-moniz-ailton/trips"
  axios.get(url)
  .then((res)=>console.log(res))
  .catch((err)=>console.log(err))
}
  return(
    <div>
      <Header/>
      <ListTrip>
      eu sou a list trip
      <br/>
      <button onClick={goToApplication}>Application</button>
      </ListTrip>
    </div>
  );
};