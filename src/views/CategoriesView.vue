<script lang="ts" setup>
import { ref } from 'vue'
import CategoryItem from '@/components/CategoryItem.vue'
import type { CategoriesData } from '@/types/categoriesTypes'
import { getCategories } from '@/utils/getCategories'

// const categoriesStore = useCategoriesStore()
// const categories = computed(() => {
//   return categoriesStore.categories
// })
//
// categoriesStore.fetchCategories()
const categoriesData = ref<CategoriesData | null>(null)
const isLoading = ref(false)
const error = ref(null)

const fetchCategories = async () => {
  categoriesData.value = null
  isLoading.value = true

  try {
    categoriesData.value = await getCategories()
  } catch (error) {
    error.value = error.toString()
  } finally {
    isLoading.value = false
  }
}

fetchCategories()
</script>

<template>
  <div>
    <h2>Categories</h2>
    <div v-if="isLoading" class="loading">Loading...</div>
    <div v-if="error" class="error">{{ error }}</div>

    <ul v-if="categoriesData" :class="$style.categoriesList">
      <CategoryItem
        v-for="item in categoriesData.items"
        :key="item.id"
        :item="item"
      />
    </ul>
  </div>
</template>

<style module>
.categoriesList {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  padding-inline-start: 0;
}
</style>
