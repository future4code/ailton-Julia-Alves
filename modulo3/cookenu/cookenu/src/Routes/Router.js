import React from "react";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import AddRecipesPage from "../Pages/AddRecipesPage/AddRecipesPage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import RecipeDetailsPage from "../Pages/RecipeDetailsPage/RecipeDetailsPage";
import SingUpPage from "../Pages/SingUpPage/SingUpPage"
import RecipeListPage from "../Pages/RecipesListPage/RecipesListPage"
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const Router =()=>{
  return(
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<LoginPage/>}/>
        <Route exact path="/cadastro" element={<SingUpPage/>}/>
        <Route index element={<RecipeListPage/>}/>
        <Route exact path="/adicionar-receita" element={<AddRecipesPage/>}/>
        <Route exact path="/detalhe/:id" element={<RecipeDetailsPage/>}/>
        <Route element={<ErrorPage/>}/>
      </Routes>
    </BrowserRouter>
  );
};
export default Router;