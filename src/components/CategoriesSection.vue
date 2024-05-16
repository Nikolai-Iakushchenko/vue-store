<script lang="ts" setup>
import { useCategoriesStore } from '@/stores/CategoriesStore'
import { computed, onMounted } from 'vue'
import CategoryItem from '@/components/CategoryItem.vue'

const categoriesStore = useCategoriesStore()
const getCategories = computed(() => {
  return categoriesStore.getCategories
})
const categories = computed(() => {
  return categoriesStore.categories
})

categoriesStore.fetchCategories()
</script>

<template>
  <div>
    <h3>Categories</h3>
    <div v-if="categories.isLoading" class="loading">Loading Categories...</div>
    <ul v-if="categories.data" :class="$style.categoriesList">
      <CategoryItem v-for="item in categories.data.items" :key="item.id" :item="item" />
    </ul>
  </div>
</template>

<style module>
.categoriesList {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}
</style>
