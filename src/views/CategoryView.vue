<script lang="ts" setup>
import type { Category } from '@/types/categoriesTypes'
import { ref, watch } from 'vue'
import ProductItem from '@/components/ProductItem.vue'
import { useRoute } from 'vue-router'
import { getProducts } from '@/utils/getProducts'
import type { ProductData } from '@/types/productTypes'
import type { Ref } from 'vue'
import { getCategory } from '@/utils/getCategory'

const route = useRoute()

const category = ref<Category | null>(null)
const products = ref<Ref<ProductData> | null>(null)
const isLoading = ref(false)
const error = ref(null)

const fetchProducts = async (categoryId: string) => {
  error.value = category.value = products.value = null
  isLoading.value = true

  try {
    category.value = await getCategory(categoryId)
    const { productsIds } = category.value
    products.value = await getProducts(productsIds)
  } catch (error) {
    error.value = error.toString()
  } finally {
    isLoading.value = false
  }
}

watch(() => route.params.categoryId, fetchProducts, { immediate: true })
</script>

<template>
  <div v-if="isLoading" class="loading">Loading...</div>
  <div v-if="error" class="error">{{ error }}</div>

  <div v-if="category && products">
    <h2>Category: {{ category.name }}</h2>
    <ul :class="$style.productList">
      <ProductItem
        v-for="product in products.items"
        :key="product.id"
        :product="product"
      />
    </ul>
  </div>
</template>

<style module>
.productList {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  padding-inline-start: 0;
}
</style>
