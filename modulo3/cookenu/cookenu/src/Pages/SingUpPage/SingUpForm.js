import React from "react";
import {InputContainer, InputLogin,ButtonLogin } from "../../Pages/LoginPage/styled";
import useForm from "../../Hooks/useForm"

const SingUpForm = ()=>{
  const [form,onChange,clear]= useForm({name:"",email:"",password:""})

  const onSubmitForm = (event)=>{
    event.preventDefault()
    console.log(form)
    clear()
  }
  return(
      <form onSubmit={onSubmitForm}>
        <InputContainer>
        <InputLogin placeholder="Nome" name={"name"} value={form.name} onChange={onChange} type={"text"} required/>
        <InputLogin placeholder="E-mail" name={"email"} value={form.email} onChange={onChange} type={"email"} required/>
        <InputLogin placeholder="Senha" name={"password"} value={form.password} onChange={onChange} type={"password"} required/>
        <ButtonLogin type={"submit"}>Fazer Cadastro</ButtonLogin>
        </InputContainer>
      </form>
  );
};
export default SingUpForm;