import React from "react";
import { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useEffect } from "react";

const MainCard = styled.main`
  background-color: white;
  height: 65vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const ProfileDiv = styled.div`
  margin:20px;
  border: 2px solid black;
  background-color:#b71c1c;
  height: 65vh;
  width: 90%;
`
const ProfileImg = styled.img`
  width: 100%;
  height: 40vh;
`
const FooterCard = styled.footer`
  background-color: white;
  height: 5vh;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
function HomePage(){
const [profile, setProfile]= useState({});

useEffect(()=>{
  getProfileToChoose()
},[]);

const getProfileToChoose = ()=>{
  axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/julia-ailton/person")
  .then((res)=>{
    setProfile(res.data.profile)
  })
  .catch((err)=>{
    console.log(err)
  })
}
const chooseProfile = (choice)=>{
  const url ="https://us-central1-missao-newton.cloudfunctions.net/astroMatch/julia-ailton/choose-person"
  const body={
    id: profile.id,
    choice: choice
  }
  axios.post(url,body)
  .then((res)=>{
    console.log(res.data);
    getProfileToChoose()
  })
}
const onClickUnlike = ()=>{
  chooseProfile(false);
}
const onClickLike = ()=>{
  chooseProfile(true);
}

  return(
    <MainCard>
       <ProfileDiv>
       {profile ? (
        <>
        <ProfileImg src={profile.photo}/>
        <h1>{profile.name}, {profile.age}</h1>
        <p>{profile.bio}</p>
        </>
      ) : (
        <p>Carregando...</p>
      )}
       </ProfileDiv>
          <FooterCard>
            <img src="https://img.icons8.com/external-prettycons-lineal-color-prettycons/49/000000/external-like-essentials-prettycons-lineal-color-prettycons-1.png" onClick={onClickUnlike}/>
            <img src="https://img.icons8.com/external-prettycons-lineal-color-prettycons/49/000000/external-like-essentials-prettycons-lineal-color-prettycons.png" onClick={onClickLike}/>
          </FooterCard>
    </MainCard>
  )
}
export default HomePage