<script lang="ts" setup>
import { useCartStore } from '@/stores/CartStore'
import type { CartItem } from '@/types/cartTypes'

interface PropTypes {
  cartItem: CartItem
}

const props = defineProps<PropTypes>()
const cartStore = useCartStore()
</script>

<template>
  <li :class="$style.cartItem">
    {{ props.cartItem.name }}
    <button :onclick="() => cartStore.delete(props.cartItem.cartId)">
      Delete
    </button>
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
