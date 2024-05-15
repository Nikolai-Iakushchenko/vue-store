<script lang="ts" setup>
import type { Category } from '@/types/categoriesTypes'

type PropTypes = {
  item: Category
}

const props = defineProps<PropTypes>()
</script>

<template>
  <li :class="$style.category">
    <RouterLink :to="{ name: 'category', params: { categoryId: props.item.id } }">
      <div :class="$style.imageWrapper">
        <img :alt="props.item.name" :class="$style.image" :src="props.item.thumbnail.url" />
      </div>
      <p>{{ props.item.name }}</p></RouterLink
    >
  </li>
</template>

<style module>
.category {
  border: 1px solid black;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.category p {
  text-align: center;
}

.image {
  max-height: 300px;
  max-width: 350px;
}

.imageWrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
