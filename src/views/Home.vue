<template>
  <div class="flex flex-col p-8">

    <div>
      <input 
      type="text" 
      class="rounded border-2 border-gray-200 w-full" 
      placeholder="Search for meals">
      
    </div>

    <div class="flex gap-1 justify-center">
      <router-link :to="{name: 'byLetter', params: {letter}}" v-for="letter of letters" :key="letter">
        {{ letter }}
      </router-link>
    </div>

  </div>
</template>

<script setup>
  import {computed, onMounted, ref} from 'vue';
  import store from '../store';
  import axiosClient from '../axiosClient.js';

  const meals = computed(()=> store.state.meals);
  const letters = "ABCDEFGHIJKLMNOPQRSTU".split("");
  const ingredients = ref([]);

  onMounted( async ()=> {
    const response = await axiosClient.get('/list.php?i=list');
    console.log(response);
    ingredients.value = response.data;
  });
</script>