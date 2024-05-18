<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { useCategoryStore } from '@/stores/CategoryStore'
import { computed } from 'vue'

const route = useRoute()
const productId = route.params.productId

const categoryStore = useCategoryStore()

const product = computed(() => {
  return categoryStore.products.find((product) => product.id === productId)
})

console.log('product', product)
</script>

<template>
  <h2>Product: {{ productId }}</h2>
</template>

<style scoped></style>
