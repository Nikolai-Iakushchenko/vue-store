<script lang="ts" setup>
import CategoryItem from '@/components/CategoryItem.vue'
import type { Category } from '@/types/categoriesTypes'

type PropTypes = {
  categories: Category[]
}

const props = defineProps<PropTypes>()
</script>

<template>
  <ul :class="$style.categoriesList">
    <CategoryItem
      v-for="item in props.categories"
      :key="item.id"
      :item="item"
    />
  </ul>
</template>

<style module>
.categoriesList {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  padding-inline-start: 0;
}
</style>
