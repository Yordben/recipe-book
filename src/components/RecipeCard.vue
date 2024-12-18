<template>
  <div class="recipe-card">
    <img :src="recipe.image" :alt="recipe.title" class="recipe-image"/>
    <h3>{{ recipe.title }}</h3>
    <p>{{ recipe.description }}</p>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  recipe: Object
});
</script>

<style scoped>
.recipe-card {
  border: 1px solid #ccc;
  padding: 10px;
  width: 200px;
  text-align: center;
}
.recipe-image {
  width: 100%;
  height: 100px;
  object-fit: cover;
}
</style>
