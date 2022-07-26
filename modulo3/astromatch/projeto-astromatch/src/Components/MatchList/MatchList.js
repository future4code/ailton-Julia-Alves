import React, {useState,useEffect} from "react";
import styled from "styled-components";
import axios from "axios";

const MainListCard = styled.main`
  background-color: white;
  height: 65vh;
  width: 100%;
`
const ListDIv = styled.div`
  margin:20px;
  border: 2px solid black;
  background-color:#b71c1c;
  height: 55vh;
  width: 90%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  ::-webkit-scrollbar {
    background-color: white;
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background-color:#b71c1c;
  }
`
const FooterList = styled.footer`
  background-color: white;
  height: 5vh;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
const TrashImg = styled.img`
  width: 80px;
  height: 80px;
`
const ImagemMatch = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 12px;
`
const MatchRow = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

function MatchList(){
  const [matches, setMatches]= useState([]);

  useEffect(() => {getMatches()}, []);

  const getMatches = ()=>{
    axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/julia-ailton/matches")
    .then((res)=>{
      console.log(res.data.matches)
      setMatches(res.data.matches)
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  const clear = ()=>{
    axios.put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/julia-ailton/clear")
    .then((res)=>{
      console.log(res)
      getMatches()
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  return(

    <MainListCard>
      <ListDIv>
        {matches && matches?.map((dado)=>{
          return <div key={dado.id}>
            <MatchRow>
              <ImagemMatch src={dado.photo} alt={dado.name}/>
              <p>{dado.name}</p>
            </MatchRow>
          </div>
        })}
      </ListDIv>
      <FooterList>
      <TrashImg src="https://img.icons8.com/fluency/48/000000/angry.png" onClick={clear}/>
      </FooterList>
    </MainListCard>
  )
}
export default MatchList