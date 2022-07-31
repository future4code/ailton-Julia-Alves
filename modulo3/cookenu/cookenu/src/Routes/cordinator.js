export const goToLogin = (navigate)=>{
  navigate("/login")
}
export const goToSingUp = (navigate)=>{
  navigate("/cadastro")
}
export const goToRecipeList = (navigate)=>{
  navigate("/")
}
export const goToRecipeDetails = (navigate,id)=>{
  navigate(`/detalhe/${id}`)
}
export const goToAddRecipes = (navigate)=>{
  navigate("/adicionar-receita")
}