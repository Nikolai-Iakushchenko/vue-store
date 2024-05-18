<script lang="ts" setup>
import { useCategoryStore } from '@/stores/CategoryStore'
import type { Category } from '@/types/categoriesTypes'
import { computed, ref, watch } from 'vue'
import CategoryItem from '@/components/CategoryItem.vue'
import ProductItem from '@/components/ProductItem.vue'
import { useRoute } from 'vue-router'
import { getProducts } from '@/utils/getProducts'
import type { Product } from '@/types/productTypes'
import type { Ref } from 'vue'
import type { Products } from '@/types/commonTypes'
import { getCategory } from '@/utils/getCategory'

const categoryStore = useCategoryStore()

type PropTypes = {
  categoryId: string
}

const props = defineProps<PropTypes>()
const { categoryId } = props
// console.log('props', props)

// categoryStore.fetchCategory(props.categoryId)
// const category = computed(() => {
//   return categoryStore.category
// })
// const products = computed(() => {
//   return categoryStore.products
// })

const route = useRoute()

const category = ref<Category | null>(null)
const products = ref<Ref<Product[]> | null>(null)
const isLoading = ref(false)
const error = ref(null)

const fetchProducts = async (categoryId) => {
  error.value = category.value = products.value = null
  isLoading.value = true

  try {
    category.value = await getCategory(categoryId)
    products.value = await getProducts(category.value.productIds)
  } catch (error) {
    error.value = error.toString()
  } finally {
    isLoading.value = false
  }
}

watch(() => route.params.categoryId, fetchProducts, { immediate: true })
</script>

<template>
  <div v-if="isLoading" class="loading">Loading Products...</div>

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
}
</style>
