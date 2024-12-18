<template>
  <div>
    <h1>Recipe Book</h1>
    <router-link to="/add">Add New Recipe</router-link>
    <div v-for="recipe in recipes" :key="recipe.id">
      <h3>{{ recipe.title }}</h3>
      <p>{{ recipe.description }}</p>
      <router-link :to="'/edit/' + recipe.id">Edit</router-link>
      <button @click="deleteRecipe(recipe.id)">Delete</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

interface Recipe {
  id: number;
  title: string;
  description: string;
}

const recipes = ref<Recipe[]>([]);
const router = useRouter();

onMounted(() => {
  recipes.value = JSON.parse(localStorage.getItem('recipes') || '[]');
});

function deleteRecipe(id: number) {
  recipes.value = recipes.value.filter(r => r.id !== id);
  localStorage.setItem('recipes', JSON.stringify(recipes.value));
  router.push('/');
}
</script>
<style scoped>
h1 {
  color: #333;
  text-align: center;
}

.recipe-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.recipe-card {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  width: 300px;
  margin: 10px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  transition: box-shadow 0.3s ease-in-out;
}

.recipe-card:hover {
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
}

h3 {
  color: #555;
}
</style>

