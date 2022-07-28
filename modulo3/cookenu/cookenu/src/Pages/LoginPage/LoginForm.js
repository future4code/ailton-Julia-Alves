import React from "react";
import {InputContainer, InputLogin,ButtonLogin } from "./styled";
import useForm from "../../Hooks/useForm"

const LoginForm = ()=>{
  const [form,onChange,clear]= useForm({email:"",password:""})

  const onSubmitForm = (event)=>{
    console.log(form)
    event.preventDefault()
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