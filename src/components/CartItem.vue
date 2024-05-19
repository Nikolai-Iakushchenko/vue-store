<script lang="ts" setup>
import type { Product } from '@/types/productTypes'

type PropTypes = {
  product: Product
}

const props = defineProps<PropTypes>()
</script>

<template>
  <li :class="$style.cartItem">
    {{ props.product.name }}
    <button>Delete</button>
  </li>
</template>

<style module>
.cartItem {
  border: 1px solid lightgray;
  margin: 10px 0;
  padding: 10px;
  display: grid;
  grid-template-columns: 1fr auto;
}
</style>
