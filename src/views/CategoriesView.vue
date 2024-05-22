<script lang="ts" setup>
import { computed } from 'vue'
import { useCategoriesStore } from '@/stores/CategoriesStore'
import CategoriesList from '@/components/CategoriesList.vue'
import { getCategory } from '@/utils/getCategory'
import { getProducts } from '@/utils/getProducts'

const categoriesStore = useCategoriesStore()
const categories = computed(() => {
  return categoriesStore.categories
})

categoriesStore.fetchCategories()

const fetchAllProducts = async (): Promise<void> => {
  // error.value = category.value = products.value = null
  // isLoading.value = true

  try {
    // category.value = await getCategory(categoryId)
    // const { productIds } = category.value
    const products = await getProducts()

    console.log('products', products)
  } catch (err: any) {
    // error.value = err.toString()
  } finally {
    // isLoading.value = false
  }
}

fetchAllProducts()
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
