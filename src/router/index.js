import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import MealsByName from '../views/MealsByname.vue';
import MealsByLeter from '../views/MealsByLetter.vue';
import MealsByIngredients from '../views/MealsByIngredients.vue';



const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/letter/:letter?",
    name: "byLetter",
    component: MealsByLeter,
  },
  {
    path: "/name/:name?",
    name: "byName",
    params: true,
    component: MealsByName,
  },
  {
    path: "/ingredient/:ingredient?",
    name: "byIngredient",
    component: MealsByIngredients,
  },
];

const router = createRouter({
  history: createWebHistory(),
  mode: 'history',
  routes
})

export default router;