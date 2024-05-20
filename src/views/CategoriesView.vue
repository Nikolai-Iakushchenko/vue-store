<script lang="ts" setup>
import { computed, ref } from 'vue'
import CategoryItem from '@/components/CategoryItem.vue'
import type { CategoriesData } from '@/types/categoriesTypes'
import { getCategories } from '@/utils/getCategories'
import { useCategoriesStore } from '@/stores/CategoriesStore'

// const categoriesData = ref<CategoriesData | null>(null)
// const isLoading = ref(false)
// const error = ref(null)
//
// const fetchCategories = async () => {
//   categoriesData.value = null
//   isLoading.value = true
//
//   try {
//     categoriesData.value = await getCategories()
//   } catch (err: any) {
//     error.value = err.toString()
//   } finally {
//     isLoading.value = false
//   }
// }
//
// fetchCategories()
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
    <h2>Categories</h2>
    <div v-if="categories.isLoading" class="loading">Loading...</div>
    <div v-if="categories.error" class="error">
      {{ categories.error }}
    </div>

    <ul v-if="categories.data" :class="$style.categoriesList">
      <CategoryItem
        v-for="item in categories.data.items"
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
