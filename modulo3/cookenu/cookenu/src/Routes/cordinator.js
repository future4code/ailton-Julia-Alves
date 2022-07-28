export const goToLogin = (history)=>{
  history.push("/login")
}
export const goToSingUp = (history)=>{
  history.push("/cadastro")
}
export const goToRecipeList = (history,id)=>{
  history.push("/")
}
export const goToRecipeDetails = (history)=>{
  history.push(`/detalhe/${id}`)
}
export const goToAddRecipes = (history)=>{
  history.push("/adicionar-receita")
}