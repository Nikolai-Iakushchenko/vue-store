<script lang="ts" setup>
import { computed } from 'vue'
import { useCategoriesStore } from '@/stores/CategoriesStore'
import CategoriesList from '@/components/CategoriesList.vue'

const categoriesStore = useCategoriesStore()
const categories = computed(() => {
  return categoriesStore.categories
})

categoriesStore.fetchCategories()
</script>

<template>
  <div>
    <h2>Categories</h2>
    <div v-if="categories.isLoading" class="loading">Loading...</div>
    <div v-if="categories.error" class="error">
      {{ categories.error }}
    </div>

    <CategoriesList
      v-if="categories.data"
      :categories="categories.data.items"
    />
  </div>
</template>

<style module></style>
