<template>
  <h1 v-if="isLoading" class="text-center text-2xl font-semibold mt-8">Loading...</h1>
  <div v-else class="max-w-[800px] mx-auto p-8" >
    <h1 class="text-center text-orange-600 font-bold text-4xl">{{ meal.strMeal }}</h1>

    <div class="grid grid-cols-1 sm:grid-cols-2 mt-6">
      <img class="rounded-xl mt-2" :src="meal.strMealThumb" :alt="meal.strMeal">
      <div class="ml-6">
        <h2 class="text-2xl font-semibold mb-2">Ingredients</h2>
        <ul>
          <template v-for="(el, ind) of new Array(20)">
            <li v-if="meal[`strIngredient${ind + 1}`]">
            {{ ind + 1 }}. {{ meal[`strIngredient${ind + 1}`] }} - {{ meal[`strMeasure${ind + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-3 text-lg py-2 mt-4">
      <div>
        <strong class="font-bold">Category: </strong> {{ meal.strCategory }}
      </div>
      <div>
        <strong class="font-bold">Area: </strong> {{ meal.strArea }}
      </div>
      <div>
        <strong class="font-bold">Tags: </strong> {{ meal.strTags }}
      </div>
    </div>

    

    <div class="my-3">
      <h2 class="text-2xl font-semibold mb-2">Instructions</h2>
      {{ meal.strInstructions }}
    </div>



  </div>
</template>

<script setup>
import {onMounted, ref} from 'vue';
import { useRoute } from 'vue-router';
import axiosClient from '../axiosClient';

const route = useRoute();
const meal = ref({});
const isLoading = ref(false);

onMounted(() => {
    isLoading.value = true;
    axiosClient.get(`/lookup.php?i=${route.params.id}`)
    .then(({data})=>{
        meal.value = data.meals[0] || {};
        isLoading.value = false;
    })
});
</script>