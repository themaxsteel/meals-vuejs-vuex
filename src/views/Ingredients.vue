<template>
  <div class="max-w-[1200px] mx-auto">
    <div class="p-8 pb-0">
      <h1 class="text-2xl font-semibold mb-4 text-orange-500 text-center">Ingredients</h1>
    </div>
    <div class="px-8">
      <input type="text" v-model="keyword"
        class="rounded border-2 bg-white border-gray-200 focus:ring-orange-500 focus:border-orange-500 mb-3 w-full"
        placeholder="Search ingredients..." />

      <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
      <a href="#" @click.prevent="openIngredient(ingredient)" v-for="ingredient of computedIngredients"
        :key="ingredient.idIngredient" class="block bg-white rounded p-3 mb-3 shadow hover:bg-orange-600 hover:text-white transition-all">
        <h3 class="text-2xl font-bold mb-2">{{ ingredient.strIngredient }}</h3>
      </a>
    </div>

    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import store from '../store';

const router = useRouter();
const keyword = ref('')
const ingredients = computed(()=> store.state.ingredients);
const computedIngredients = computed(() => {
  if (!computedIngredients) return ingredients;
  return ingredients.value.filter((i) =>
    i.strIngredient.toLowerCase().includes(keyword.value.toLowerCase())
  );
});

function openIngredient(ingredient){
  store.commit('setMealIngredient', ingredient)
  console.log(ingredient);
  router.push({
    name:"byIngredient",
    params:{ ingredient: ingredient.strIngredient},
  })
}

onMounted(()=>{
  if(ingredients.value.length == 0){
    store.dispatch("loadIngredients")
  }
})

</script>