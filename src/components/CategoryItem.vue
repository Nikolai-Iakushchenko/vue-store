<script lang="ts" setup>
import type { Category } from '@/types/categoriesTypes'

type PropTypes = {
  item: Category
}

const props = defineProps<PropTypes>()
</script>

<template>
  <li>{{ props.item.name }}</li>
</template>

<style module></style>
