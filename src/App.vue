<script lang="ts" setup>
import { RouterLink, RouterView } from 'vue-router'
import CartIcon from '@/components/CartIcon.vue'
</script>

<template>
  <header :class="$style.header">
    <RouterLink to="/"><h1>Vue Store</h1></RouterLink>
    <RouterLink to="/cart">
      <CartIcon />
    </RouterLink>
  </header>

  <RouterView />
</template>

<style module>
.header {
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
}

.header a {
  color: #005bff;
}
</style>
