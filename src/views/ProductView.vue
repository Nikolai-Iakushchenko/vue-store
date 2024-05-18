<script lang="ts" setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const productId = route.params.productId
</script>

<template>
  <h2>Product: {{ productId }}</h2>
</template>

<style scoped></style>
