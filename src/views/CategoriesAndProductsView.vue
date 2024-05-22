<script lang="ts" setup>
import { computed, ref } from 'vue'
// import { useCategoriesStore } from '@/stores/CategoriesStore'
import CategoriesList from '@/components/CategoriesList.vue'
import { getCategory } from '@/utils/getCategory'
import { getProducts } from '@/utils/getProducts'
import type { Category } from '@/types/categoriesTypes'
import type { Product } from '@/types/productTypes'
import { getCategories } from '@/utils/getCategories'
import ProductsList from '@/components/ProductsList.vue'

// const categoriesStore = useCategoriesStore()
// const categories = computed(() => {
//   return categoriesStore.categories
// })
//
// categoriesStore.fetchCategories()
//
// const fetchAllProducts = async (): Promise<void> => {
//   // error.value = category.value = products.value = null
//   // isLoading.value = true
//
//   try {
//     // category.value = await getCategory(categoryId)
//     // const { productIds } = category.value
//     const products = await getProducts()
//
//     console.log('products', products)
//   } catch (err: any) {
//     // error.value = err.toString()
//   } finally {
//     // isLoading.value = false
//   }
// }
//
// fetchAllProducts()

const categories = ref<Category[] | null>(null)
const products = ref<Product[] | null>(null)
const isLoading = ref(false)
const error = ref(null)

const fetchCategoriesAndProducts = async () => {
  error.value = categories.value = products.value = null
  isLoading.value = true

  try {
    categories.value = await getCategories()
    products.value = await getProducts()
  } catch (e: any) {
    error.value = e.toString()
  } finally {
    isLoading.value = false
  }
}

fetchCategoriesAndProducts()
</script>

<template>
  <div>
    <div v-if="isLoading" class="loading">Loading...</div>
    <div v-if="error" class="error">
      {{ error }}
    </div>

    <CategoriesList v-if="categories" :categories="categories" />
    <ProductsList v-if="products" :products="products" />
  </div>
</template>

<style module></style>
