<template>
  <div class="max-w-[1200px] mx-auto">
    <div class="p-8 pb-0">
      <h1 class="text-4xl text-center font-bold mb-4 text-orange-500">Meals for {{ route.params.ingredient }}</h1>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-4 gap-8 p-8">
      <MealItem v-for="meal of meals" :meal="meal" />
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import MealItem from '../components/MealItem.vue';
import store from '../store';
const route = useRoute();
const ingredient = computed(() => store.state.mealsByIngredient.ingredient);
const meals = computed(() => store.state.mealsByIngredient.meals);

onMounted(() => {
  store.commit('setMealsByIngredient', [])
  store.dispatch('searchMealsByIngredient', route.params.ingredient)
})

</script>