<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { useCategoryStore } from '@/stores/CategoryStore'
import { computed } from 'vue'

const route = useRoute()
const productId = route.params.productId

const categoryStore = useCategoryStore()

const product = computed(() => {
  return categoryStore.products.items.find((product) => product.id === +productId)
})
</script>

<template>
  <h2>Product: {{ product.name }}</h2>
</template>

<style scoped></style>
