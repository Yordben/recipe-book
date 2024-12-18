<template>
  <div class="form-container">
    <h1>{{ recipeId ? 'Edit Recipe' : 'Add Recipe' }}</h1>
    <form @submit.prevent="submitRecipe" class="recipe-form">
      <div class="input-group">
        <label for="title">Title</label>
        <input id="title" v-model="recipe.title" placeholder="Enter recipe title" required>
      </div>
      <div class="input-group">
        <label for="description">Description</label>
        <textarea id="description" v-model="recipe.description" placeholder="Enter recipe description" required></textarea>
      </div>
      <div class="form-actions">
        <button type="submit" class="submit-btn">Submit</button>
        <router-link to="/" class="cancel-link">Cancel</router-link>
      </div>
    </form>
  </div>
</template>

<style scoped>
.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  margin: 40px auto;
  padding: 20px;
  background-color: #f8f8f8;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  border-radius: 8px;
}

.recipe-form {
  width: 100%;
}

.input-group {
  margin-bottom: 20px;
  width: 100%;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #333;
}

input[type="text"], textarea {
  width: 100%;
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

textarea {
  height: 150px;
  resize: vertical;
}

.form-actions {
  display: flex;
  justify-content: space-between;
}

.submit-btn, .cancel-link {
  padding: 10px 20px;
  text-decoration: none;
  display: inline-block;
  margin-top: 10px;
  border-radius: 5px;
  color: white;
  background-color: #5cb85c;
  border: none;
  cursor: pointer;
}

.submit-btn:hover {
  background-color: #4cae4c;
}

.cancel-link {
  background-color: #f44336;
}

.cancel-link:hover {
  background-color: #d32f2f;
}
</style>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();
const recipeId = ref(route.params.id);
const recipe = ref({ id: null, title: '', description: '' });

onMounted(() => {
  if (recipeId.value) {
    const recipes = JSON.parse(localStorage.getItem('recipes') || '[]');
    const existingRecipe = recipes.find(r => r.id === parseInt(recipeId.value));
    if (existingRecipe) {
      recipe.value = { ...existingRecipe };
    }
  }
});

function submitRecipe() {
  const recipes = JSON.parse(localStorage.getItem('recipes') || '[]');
  if (recipeId.value) {
    const index = recipes.findIndex(r => r.id === parseInt(recipeId.value));
    if (index !== -1) {
      recipes[index] = { ...recipe.value, id: parseInt(recipeId.value) };
    }
  } else {
    recipe.value.id = Date.now();
    recipes.push(recipe.value);
  }
  localStorage.setItem('recipes', JSON.stringify(recipes));
  router.push('/');
}
</script>
