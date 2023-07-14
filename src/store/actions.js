import axiosClient from '../axiosClient';

export function searchMeals({ commit }, keyword) {
  commit('setMealsByNameLoading', true);
  axiosClient.get(`search.php?s=${keyword}`)
    .then(({ data }) => {
      commit('setSearchedMeals', data.meals)
      commit('setMealsByNameResult', keyword)
      commit('setMealsByNameLoading', false)
    })
}

export function loadIngredients({ commit }) {
  axiosClient.get('list.php?i=list')
    .then(({ data }) => {
      commit('setIngredients', data.meals)
    })
}

export function searchMealsByIngredient({commit}, ingredient){
  axiosClient.get(`filter.php?i=${ingredient}`)
  .then(({data})=>{
    commit('setMealsByIngredient', data.meals)
  })
}
