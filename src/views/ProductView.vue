<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { useCategoryStore } from '@/stores/CategoryStore'
import { computed, ref, watch } from 'vue'
import type { Product } from '@/types/productTypes'
import { getProduct } from '@/utils/getProduct'
import { useCartStore } from '@/stores/CartStore'

const route = useRoute()
const productId = route.params.productId

const cartStore = useCartStore()

// const categoryStore = useCategoryStore()
//
// const product = computed(() => {
//   return categoryStore.products.items.find((product) => product.id === +productId)
// })

const product = ref<Product | null>(null)
const isLoading = ref(false)
const error = ref(null)

const fetchProduct = async (productId) => {
  error.value = product.value = null
  isLoading.value = true

  try {
    product.value = await getProduct(productId)
  } catch (error) {
    error.value = error.toString()
  } finally {
    isLoading.value = false
  }
}

watch(() => route.params.productId, fetchProduct, { immediate: true })
</script>

<template>
  <div v-if="isLoading" class="loading">Loading Product...</div>

  <div v-if="error" class="error">{{ error }}</div>
  <div v-if="product">
    <div :class="$style.productView">
      <div><img :src="product.thumbnailUrl" alt="product" /></div>
      <div :class="$style.rightColumn">
        <h2>Product: {{ product.name }}</h2>
        <p v-html="product.description" />
        <p>Price: {{ product.price }}</p>
        <button :onclick="() => cartStore.add(product!)">Buy</button>
      </div>
    </div>
  </div>
</template>

<style module>
.productView {
  display: inline-grid;
  grid-template-columns: auto auto;
  gap: 10px;
}

.rightColumn > * {
  margin-bottom: 10px;
}
</style>
