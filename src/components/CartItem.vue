<script lang="ts" setup>
import type { Product } from '@/types/productTypes'

type PropTypes = {
  product: Product
}

const props = defineProps<PropTypes>()
</script>

<template>
  <li>
    {{ props.product.name }}
    <button>Delete</button>
  </li>
</template>

<style module></style>
