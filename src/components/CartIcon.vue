<script lang="ts" setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons/faShoppingCart'
import { useCartStore } from '@/stores/CartStore'

const cartStore = useCartStore()
</script>

<template>
  <div>
    <FontAwesomeIcon :icon="faShoppingCart" />
    Cart {{ cartStore.numberOfItems }}
  </div>
</template>

<style scoped></style>
