<template>
  <div class="p-8 max-w-[1200px] mx-auto">
    <h1 class="font-semibold text-2xl text-center text-orange-600">Random Meals for Today</h1>
    <div class="grid grid-cols-1 sm:grid-cols-4 gap-8 p-8">
      <MealItem v-for="meal of meals" :meal="meal"/>
    </div>
  </div>
</template>

<script setup>
  import { computed, onMounted, ref } from "vue";
// import store from "../store";
// import Meals from "../components/Meals.vue";
import axiosClient from "../axiosClient.js";
import MealItem from "../components/MealItem.vue";
const meals = ref([]);

onMounted(() => {
  for (let i = 0; i < 10; i++) {
    axiosClient
      .get(`random.php`)
      .then(({ data }) => meals.value.push(data.meals[0]));
  }
});
</script>