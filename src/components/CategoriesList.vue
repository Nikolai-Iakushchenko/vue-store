<script lang="ts" setup>
import CategoryItem from '@/components/CategoryItem.vue'
import type { Category } from '@/types/categoriesTypes'

interface Props {
  categories: Category[]
}

const props = defineProps<Props>()
</script>

<template>
  <div :class="$style.categories">
    <h2 :class="$style.header">Categories</h2>
    <ul :class="$style.categoriesList">
      <CategoryItem
        v-for="item in props.categories"
        :key="item.id"
        :item="item"
      />
    </ul>
  </div>
</template>

<style module>
.categories {
  margin-top: 10px;
}

.header {
  text-align: center;
  background: lightgray;
}

.categoriesList {
  list-style: none;
  display: grid;
  gap: 10px;
  padding-inline-start: 0;
  grid-template-columns: repeat(6, 1fr);
  width: 100%;
  height: 100%;
}
</style>
