<script lang="ts" setup>
import type { Product } from '@/types/productTypes'
import { useCartStore } from '@/stores/CartStore'

type PropTypes = {
  product: Product
}

const props = defineProps<PropTypes>()
const cartStore = useCartStore()
</script>

<template>
  <li :class="$style.cartItem">
    {{ props.product.name }}
    <button :onclick="() => cartStore.delete(props.product.id)">Delete</button>
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
