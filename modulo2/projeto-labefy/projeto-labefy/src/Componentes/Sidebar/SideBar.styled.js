import styled from "styled-components";

export const SideBox = styled.div`
  background-color: palevioletred;
  width: 20%;
  border-radius: 2vh;
  margin:10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap:10px;
  input{
    width: 50%;
  }
`
export const ListaCard = styled.p`
  border-radius: 2vh;
  background-color: black;
  color: white;
  font-style:italic;
  margin: 4px;
  width: 50%;
  display: flex;
  justify-content:space-around;
  align-items: center;
  &:hover{
    cursor: pointer;
    background-color:pink;
    color: black;
    font-size: large;
  }
  button{
    background-color: black;
    color: white;
    margin: 2px;
    &:hover{
      background-color: palevioletred;
      cursor: pointer;
    }
  }
`