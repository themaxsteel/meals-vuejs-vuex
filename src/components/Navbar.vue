<template>
  <header class="bg-white shadow-md h-16 flex justify-between items-stretch">
    <router-link :to="{name: 'home'}" class="inline-flex items-center h-full px-2">
      Home
    </router-link>
    <div class="flex items-center font-semibold gap-1">
      <router-link :to="{name: 'byName'}" class="inline-flex items-center px-2 h-full transition-colors duration-300 hover:bg-orange-600 hover:text-white">
        Search Meals
      </router-link>
      <router-link :to="{name: 'byLetter'}" class="inline-flex items-center px-2 h-full transition-colors duration-300 hover:bg-orange-600 hover:text-white">
        Meals by Letter
      </router-link>
      <router-link :to="{name: 'ingredients'}" class="inline-flex items-center px-2 h-full transition-colors duration-300 hover:bg-orange-600 hover:text-white">
        Meals by Ingredients
      </router-link>
    </div>
    <div>

    </div>
  </header>
  
</template>