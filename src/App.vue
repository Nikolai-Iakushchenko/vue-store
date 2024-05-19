<script lang="ts" setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header :class="$style.header">
    <!--    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="50"-->
    <!--         height="50" />-->

    <RouterLink to="/"><h1>Vue Store</h1></RouterLink>
    <RouterLink to="/cart">Cart</RouterLink>
  </header>

  <RouterView />
</template>

<style module>
.header {
  display: grid;
  grid-template-columns: 1fr auto;
}
</style>
