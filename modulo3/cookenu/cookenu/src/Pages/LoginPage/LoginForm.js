import React from "react";
import {InputContainer, InputLogin,ButtonLogin } from "./styled";
import useForm from "../../Hooks/useForm"
import {login} from "../../Services/user"
import { useNavigate } from "react-router-dom";

const LoginForm = ()=>{
  const [form,onChange,clear]= useForm({email:"",password:""})
  const navigate = useNavigate()

  const onSubmitForm = (event)=>{
    event.preventDefault()
    login(form,clear,navigate)
  }
  
  return(
    
      <form onSubmit={onSubmitForm}>
        <InputContainer>
        <InputLogin placeholder="E-mail" name={"email"} value={form.email} onChange={onChange} type={"email"} required/>
        <InputLogin placeholder="Senha" name={"password"} value={form.password} onChange={onChange} type={"password"} required/>
        <ButtonLogin type={"submit"}>Fazer Login</ButtonLogin>
        </InputContainer>
      </form>
  );
};
export default LoginForm;