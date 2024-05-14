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

onMounted(() => {
  categoriesStore.fetchCategories()
})
</script>

<template>
  <h3>Categories</h3>
  <ul v-if="categories.data" :class="$style.categoriesList">
    <CategoryItem v-for="item in categories.data.items" :key="item.id" :item="item" />
  </ul>
  <p v-else>Loading Categories...</p>
</template>

<style module>
.categoriesList {
  list-style: none;
  display: flex;
}
</style>
