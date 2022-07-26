import axios from "axios";
import React from "react";
import { useState } from "react";
import styled from "styled-components";
import MatchList from "./Components/MatchList/MatchList";
import HomePage from "./Components/HomePage/HomePage";
import heart from "../src/heart.jpg"

const Container = styled.div`
  background-image:url(${heart});
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
const CardHome = styled.div`
  width: 25%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 4px solid black;
  border-radius: 12px;
  background-color: white;
`
const HeaderCard = styled.header`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 10vh;
  img{
    width: 60px;
    height: 60px;
  }
  :hover h2{
    color: red;
  }
`
const ComponenteFuncional=()=> {
  const [selectPage, setSelectPage]= useState("homePage");

const ChoosePage = ()=>{
  switch(selectPage){
    case"homePage":
    return <HomePage/>;
    case"matchList":
    return <MatchList/>;
    default:
      return <HomePage/>
  }
}
const goToHomePage = ()=>{
  setSelectPage("homePage");
}
const goToMatchList = ()=>{
  setSelectPage("matchList");
}

    return (
      <Container>
        <CardHome>
          <HeaderCard>
            <img src="https://img.icons8.com/doodle/48/000000/--tinder.png" onClick={goToHomePage}/>
            <h2>ASTROMATCH</h2>
            <img src="https://img.icons8.com/ios/50/000000/overview-pages-4.png" onClick={goToMatchList}/>
          </HeaderCard>
          {ChoosePage()}
        </CardHome>
      </Container>
    );
}

export default ComponenteFuncional