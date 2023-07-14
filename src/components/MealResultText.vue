<template>
  <div v-if="result">
    <p v-if="meals.length != 0" class="text-center font-semibold text-xl mt-4">Found {{ meals.length }} result<span
        v-if="meals.length > 1">s</span> for "{{ result }}"</p>
    <p v-else class="text-center font-semibold text-xl mt-4">No result found for "{{ result }}"</p>
  </div>
</template>

<script setup>
const {meals, result} = defineProps({
  meals: {
    required: true,
    type: Array,
  },
  result: {
    type: String, 
  }
})
</script>