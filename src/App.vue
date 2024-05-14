<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
<!--    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="50"-->
<!--         height="50" />-->

    <div class="wrapper">
      <h1>Vue Store</h1>

      <nav>
        <RouterLink to="/">Products</RouterLink>
        <RouterLink to="/about">Cart</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style module>

</style>
