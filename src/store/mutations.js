export function setSearchedMeals(state, meals) {
  state.mealsByName.searchedMeals = meals || [];
}
export function setMealsByNameResult(state, result) {
  state.mealsByName.result = result
}
export function setMealsByNameLoading(state, loading) {
  state.mealsByName.loading = loading
}

export function setIngredients(state, ingredients) {
  state.ingredients = ingredients
}

export function setMealIngredient(state, ingredient) {
  console.log(ingredient)
  state.mealsByIngredient.ingredient = ingredient;
}

export function setMealsByIngredient(state, meals) {
  state.mealsByIngredient.meals = meals;
}