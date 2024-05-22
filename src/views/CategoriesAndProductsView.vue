<script lang="ts" setup>
import { ref, watch } from 'vue'
import CategoriesList from '@/components/CategoriesList.vue'
import { getCategory } from '@/utils/getCategory'
import { getProducts } from '@/utils/getProducts'
import type { Category } from '@/types/categoriesTypes'
import type { Product } from '@/types/productTypes'
import { getCategories } from '@/utils/getCategories'
import ProductsList from '@/components/ProductsList.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const categories = ref<Category[] | []>([])
const products = ref<Product[] | []>([])
const category = ref<Category | null>(null)
const isLoading = ref(false)
const error = ref(null)

const fetchCategory = async (categoryId: string) => {
  error.value = category.value = null
  products.value = categories.value = []
  isLoading.value = true

  try {
    if (!route.params.categoryId) {
      categories.value = await getCategories()
      products.value = await getProducts()
    } else {
      category.value = await getCategory(categoryId)

      if (!categories.value.length) {
        categories.value = await getCategories()
      }

      if (category.value !== null) {
        const { id: categoryId } = category.value
        categories.value = categories.value.filter(
          (item) => item.parentId === categoryId
        )
      }

      const { productIds } = category.value
      products.value = await getProducts(productIds)
    }
  } catch (e: any) {
    error.value = e.toString()
  } finally {
    isLoading.value = false
  }
}

// fetchCategoriesAndProducts()

watch(() => route.params.categoryId as string, fetchCategory, {
  immediate: true
})
</script>

<template>
  <div>
    {{ error }}
  </div>
  <h1 v-if="category">Category: {{ category.name }}</h1>
  <CategoriesList v-if="categories.length" :categories="categories" />
  <ProductsList v-if="products.length" :products="products" />

  <div v-if="isLoading" class="loading">Loading...</div>
  <div v-if="error" class="error"></div>
</template>

<style module></style>
