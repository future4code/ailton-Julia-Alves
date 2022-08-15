import React from 'react';
import {HeaderContainer} from "../Header/styled"
import { goToRecipeList, goToLogin } from '../../Routes/cordinator';
import { useNavigate } from 'react-router-dom';

const Header =()=> {
  const navigate = useNavigate()
  return (
      <HeaderContainer>
        <h1 onClick={()=>goToRecipeList(navigate)}>Cookenu</h1>
        <button onClick={()=>goToLogin(navigate)}>Login</button>
      </HeaderContainer>
  );
}
export default Header;
