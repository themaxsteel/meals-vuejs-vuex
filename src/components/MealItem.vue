<template>
  <div :key="meal.idMeal" class="bg-white shadow rounded-xl hover:scale-105 transition-all">
    <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
      <img :src="meal.strMealThumb" :alt="meal.strMeal" class="rounded-t-xl">
    </router-link>
    <div class="p-4">
      <h3 class="text-center font-bold">{{ meal.strMeal }}</h3>
      <p class="text-sm mt-2 text-center">{{ $filters.truncateWords(meal.strInstructions, 15) }}</p>
    </div>
  </div>
</template>

<script setup>
const { meal } = defineProps({
  meal: {
    required: true,
    type: Object
  }
})
</script>