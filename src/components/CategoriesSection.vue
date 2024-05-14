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
  <pre v-if="categories.data">{{ categories.data }}</pre>
  <p v-else>Loading Categories...</p>
</template>

<style module></style>
