import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import RecipeForm from "../views/RecipeDetails.vue";


const routes = [
  { path: '/', component: Home },
  { path: '/add', component: RecipeForm },
  { path: '/edit/:id', component: RecipeForm, props: true }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
