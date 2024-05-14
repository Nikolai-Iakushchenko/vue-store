<script lang="ts" setup>
import { useCategoriesStore } from '@/stores/CategoriesStore'
import { computed, onMounted } from 'vue'

const categoriesStore = useCategoriesStore()
const getCategories = computed(() => {
  return categoriesStore.getCategories
})
const categories = computed(() => {
  return categoriesStore.categories
})

onMounted(() => {
  categoriesStore.fetchCategories()
})
</script>

<template>
  <h3>Categories</h3>
  <ul v-if="categories.data">
    <li v-for="item in categories.data.items" :key="item.id">{{ item.name }}</li>
  </ul>

  <p v-else>Loading Categories...</p>
</template>

<style module></style>
