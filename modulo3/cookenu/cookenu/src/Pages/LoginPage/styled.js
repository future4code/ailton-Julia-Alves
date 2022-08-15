import styled from "styled-components";
import { primaryColor, neutralColor } from "../../Constants/colors";
import Home from "../../Assets/background.jpg"

export const ScreamContainer = styled.div`
  background-image: url(${Home}) ;
  background-size: cover;
  background-repeat: no-repeat;
  display:flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 90vh;
`
export const DivTESTE = styled.div`
  background-color: white;
  border-radius: 12px;
  height: 25vh;
  padding: 20px;
  margin: 300px 0;
  width: 40%;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1{
    font-size:30px;
    color: ${primaryColor}
  }`

export const LoginImg = styled.img`
  width: 70vw;
  max-width: 500px;
  margin: 10px 0;
  border-radius: 12px;
  border: 5px solid ${primaryColor};
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  align-items: center;
  max-width: 500px;
  margin-bottom: 20px;
`
export const InputLogin = styled.input`
  width: 90%;
  margin-bottom: 20px;
  border: 3px solid ${primaryColor};
  border-radius: 12px;
  padding: 13px;
  cursor: pointer;
`

export const ButtonLogin = styled.button`
  background-color: ${primaryColor};
  border: 3px solid ${primaryColor};
  width: 40%;
  padding: 7px;
  border-radius: 12px;
  cursor: pointer;
  :hover{
    background-color:${neutralColor};
  }
`