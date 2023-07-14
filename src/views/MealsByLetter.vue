<template>
  <div class="p-8">
    <div class="max-w-[1200px] mx-auto">
      <h1 class="text-center font-semibold text-2xl text-orange-600">Meals by Letter</h1>

      <!-- Letter -->
      <div class="flex flex-wrap justify-center my-6">
        <router-link
          v-for="letter of letters"
          :key="letter"
          :to="{name:'byLetter', params:{ letter } }"
          class="font-semibold flex items-center justify-center"
        >
         <p v-if="letter != route.params.letter" class="px-2 hover:text-orange-500 hover:scale-150 transition-all"> {{ letter }}</p>
         <p v-else class="px-2 bg-orange-600 text-white"> {{ letter }}</p>
        </router-link>
      </div>
      
      <h1 v-if="isLoading" class="text-center text-xl mb-8 font-semibold">Loading...</h1>
      <MealResultText v-else :meals="meals" :result="route.params.letter" class="mb-8"/>

      <!-- Meal Item -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <MealItem v-for="meal of meals" :meal="meal"/>
      </div>

    </div>
  </div>
</template>
<script setup>
import { onMounted, watch, ref } from 'vue';
import { useRoute } from 'vue-router';
import axiosClient from '../axiosClient';
import MealItem from '../components/MealItem.vue';
import MealResultText from '../components/MealResultText.vue';

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const route = useRoute();
const meals = ref([]);
const isLoading = ref(false);

watch(route, () => {
  mealsByLetter();
});
 
onMounted(() => {
  mealsByLetter();
});

function mealsByLetter(){
  if(route.params.letter){
    isLoading.value = true;
    axiosClient.get(`search.php?f=${route.params.letter}`)
      .then(({ data }) => {
        meals.value = data.meals;
        isLoading.value = false;
      })
  }
}

</script>