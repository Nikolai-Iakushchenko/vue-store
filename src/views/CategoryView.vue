<script lang="ts" setup>
import { useCategoryStore } from '@/stores/CategoryStore'
import { computed, ref, watch } from 'vue'
import ProductItem from '@/components/ProductItem.vue'
import { useRoute } from 'vue-router'

const categoryStore = useCategoryStore()

type PropTypes = {
  categoryId: string
}

const props = defineProps<PropTypes>()

categoryStore.fetchCategory(props.categoryId)
const category = computed(() => {
  return categoryStore.category
})
const products = computed(() => {
  return categoryStore.products
})

const route = useRoute()

watch(() => route.params.categoryId, categoryStore.fetchCategory, { immediate: true })
</script>

<template>
  <div v-if="categoryStore.isLoading" class="loading">Loading Products...</div>

  <div v-if="categoryStore.error" class="error">{{ categoryStore.error }}</div>

  <div v-if="category && products">
    <h2>Category: {{ category.name }}</h2>
    <ul :class="$style.productList">
      <ProductItem v-for="product in products.items" :key="product.id" :item="product" />
    </ul>
  </div>
</template>

<style module>
.productList {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}
</style>
