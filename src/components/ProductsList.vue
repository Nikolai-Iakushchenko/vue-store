<script lang="ts" setup>
import ProductItem from '@/components/ProductItem.vue'
import type { Product } from '@/types/productTypes'

interface Props {
  products: Product[]
}

const props = defineProps<Props>()
</script>

<template>
  <div :class="$style.products">
    <h2 :class="$style.header">Products</h2>
    <ul :class="$style.productList">
      <ProductItem
        v-for="product in props.products"
        :key="product.id"
        :product="product"
      />
    </ul>
  </div>
</template>

<style module>
.products {
  margin-top: 10px;
}

.header {
  text-align: center;
  background: lightgray;
}

.productList {
  list-style: none;
  display: grid;
  gap: 10px;
  padding-inline-start: 0;
  grid-template-columns: repeat(6, 1fr);
  width: 100%;
  height: 100%;
}
</style>
