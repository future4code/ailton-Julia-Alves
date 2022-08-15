import axios from "axios";
import {BASE_URL} from "../Constants/urls"
import { goToRecipeList } from "../Routes/cordinator";

export const login =(body,clear)=>{
  axios.post(`${BASE_URL}/user/login`,body)
  .then((res)=>{
    console.log(res)
    localStorage.setItem("token",res.data.token)
    clear()
    goToRecipeList(navigate)
  })
  .catch((err)=>{
    alert("erro no login",err)
  })
}