<template>

  <h1 class="text-center mt-4 font-bold text-2xl text-orange-600">Search meals receipt</h1>
  <div class="max-w-[1200px] mx-auto">
    <div class="flex justify-center mt-3">
      <input 
      type="text" 
      placeholder="Search meals..." 
      class="rounded border-2 border-gray-200 w-72" 
      v-model="keyword"
      @change="searchMeals">
    </div>

    <h1 v-if="loading" class="text-center text-xl mt-4 font-semibold">Loading...</h1>

    <MealResultText :meals="meals" :result="result"/>
    
    <!-- <div v-if="result">
      <p v-if="meals.length != 0" class="text-center font-semibold text-xl mt-4">Found {{ meals.length }} result<span v-if="meals.length > 1">s</span> for "{{ result }}"</p>
      <p v-else class="text-center font-semibold text-xl mt-4">No result found for "{{ result }}"</p>
    </div> -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-8 p-8">
      <MealItem v-for="meal of meals" :meal="meal"/>
    </div>
  </div>
  
  
  

  
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import { useRoute } from "vue-router";
import store from '../store';
import MealItem from '../components/MealItem.vue';
import MealResultText from '../components/MealResultText.vue';

const route = useRoute();
const keyword = ref('');
const result = computed(() => store.state.mealsByName.result);
const meals = computed(() => store.state.mealsByName.searchedMeals);
const loading = computed(() => store.state.mealsByName.loading);

function searchMeals() {
  if (keyword.value) {
    store.dispatch("searchMeals", keyword.value);
  } else {
    store.commit("setSearchedMeals", []);
    store.commit('setMealsByNameResult', '');
  }
}

onMounted(() => {
  keyword.value = route.params.name;
  if(keyword.value) {
    searchMeals();
  }
})
</script>