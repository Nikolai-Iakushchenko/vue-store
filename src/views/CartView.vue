<script setup>
import { useCartStore } from '@/stores/CartStore'
import { computed } from 'vue'

const cartStore = useCartStore()
const cart = computed(() => {
  return cartStore.cart
})
</script>

<template>
  <h2>Cart</h2>
  <ul>
    <li v-for="item in cart" :key="item.id" :item="item">
      {{ item.name }}
    </li>
  </ul>
</template>

<style module></style>