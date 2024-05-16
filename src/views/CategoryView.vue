<script lang="ts" setup>
import { useCategoryStore } from '@/stores/CategoryStore'
import type { Category } from '@/types/categoriesTypes'
import { computed } from 'vue'
import CategoryItem from '@/components/CategoryItem.vue'
import ProductItem from '@/components/ProductItem.vue'

const categoryStore = useCategoryStore()

type PropTypes = {
  categoryId: string
}

const props = defineProps<PropTypes>()
// console.log('props', props)

categoryStore.fetchCategory(props.categoryId)
const category = computed(() => {
  return categoryStore.category
})
const products = computed(() => {
  return categoryStore.products
})
</script>

<template>
  <div v-if="category.isLoading" class="loading">Loading...</div>

  <div v-if="category.error" class="error">{{ category.error }}</div>

  <div v-if="category.data">
    <h2>Категория: {{ category.data.name }}</h2>
    <ul :class="$style.productList">
      <ProductItem v-for="product in products.data.items" :key="product.id" :item="product" />
    </ul>
  </div>

  <p v-else>Loading Category...</p>
</template>

<style module>
.productList {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}
</style>
