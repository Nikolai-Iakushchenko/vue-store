<script lang="ts" setup>
import type { Category } from '@/types/categoriesTypes'

type PropTypes = {
  item: Category
}

const props = defineProps<PropTypes>()
</script>

<template>
  <li :class="$style.category">
    <img :alt="props.item.name" :src="props.item.thumbnail.url" />
    <p>{{ props.item.name }}</p>
  </li>
</template>

<style module>
.category {
  border: 1px solid black;
  padding: 5px;
}
</style>
