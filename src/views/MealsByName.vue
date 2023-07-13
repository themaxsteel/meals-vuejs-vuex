<template>

  <h1 class="text-center mt-4 font-bold text-2xl">Search meals receipt</h1>

  <div class="flex justify-center mt-3">
    <input 
    type="text" 
    placeholder="Search meals..." 
    class="rounded border-2 border-gray-200 w-72" 
    v-model="keyword"
    @change="searchMeals">
  </div>

  <p v-if="meals.length != 0" class="text-center font-semibold text-xl mt-4">Found {{ meals.length }} result<span v-if="meals.length > 1">s</span> for "{{ result }}"</p>
  <p v-else class="text-center font-semibold text-xl mt-4">No result found for "{{ result }}"</p>
  

  <div class="grid grid-cols-1 md:grid-cols-6 gap-8 p-8">
    <div v-for="meal of meals" :key="meal.idMeal" class="bg-white shadow rounded-xl hover:scale-105 transition-all">
      <router-link to="/">
        <img :src="meal.strMealThumb" :alt="meal.strMeal" class="rounded-t-xl">
      </router-link>
      <h3 class="text-center py-4 font-bold">{{ meal.strMeal }}</h3>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import { useRoute } from "vue-router";
import store from '../store';

const route = useRoute();
const keyword = ref('');
var result = '';
const meals = computed(() => store.state.searchedMeals);

function searchMeals() {
  if (keyword.value) {
    store.dispatch("searchMeals", keyword.value);
  } else {
    store.commit("setSearchedMeals", []);
  }
  result = keyword.value;
}

onMounted(() => {
  keyword.value = route.params.name;
  if(keyword.value) {
    searchMeals();
  }
})
</script>