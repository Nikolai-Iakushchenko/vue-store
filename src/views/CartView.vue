<script setup>
import { useCartStore } from '@/stores/CartStore'
import { computed, ref } from 'vue'
import CartItem from '@/components/CartItem.vue'

const cartStore = useCartStore()
const cart = computed(() => {
  return cartStore.cart
})

const purchaseMade = ref(false)

const placePurchase = () => {
  purchaseMade.value = true
}
</script>

<template>
  <h2>Cart</h2>
  <ul :class="$style.cartList">
    <CartItem v-for="item in cart" :key="item.cartId" :cartItem="item" />
  </ul>
  <button
    v-if="cartStore.numberOfItems"
    :class="$style.placeOrderButton"
    @click="placePurchase"
  >
    Place Order
  </button>
  <p v-if="purchaseMade">Congratulations on your purchase!</p>
</template>

<style module>
.cartList {
  list-style: none;
  padding-inline-start: 0;
  margin-bottom: 20px;
}

.placeOrderButton {
  margin-bottom: 20px;
}
</style>