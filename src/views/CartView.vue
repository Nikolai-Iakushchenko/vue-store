<script setup>
import { useCartStore } from '@/stores/CartStore'
import { computed } from 'vue'
import CartItem from '@/components/CartItem.vue'

const cartStore = useCartStore()
const cart = computed(() => {
  return cartStore.cart
})
</script>

<template>
  <h2>Cart</h2>
  <ul :class="$style.cartList">
    <CartItem v-for="item in cart" :key="item.id" :product="item" />
  </ul>
</template>

<style module>
.cartList {
  list-style: none;
}
</style>