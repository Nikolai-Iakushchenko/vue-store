<script lang="ts" setup>
import type { Category } from '@/types/categoriesTypes'

type PropTypes = {
  item: Category
}

const props = defineProps<PropTypes>()
</script>

<template>
  <li :class="$style.category">
    <RouterLink :class="$style.link" :to="`/category/${props.item.id}`">
      <div :class="$style.imageWrapper">
        <img
          :alt="props.item.name"
          :class="$style.image"
          :src="props.item.thumbnail.url"
        />
      </div>
      <p>{{ props.item.name }}</p>
    </RouterLink>
  </li>
</template>

<style module>
.category {
  border: 1px solid lightgray;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.category p {
  text-align: center;
}

.link {
  height: 100%;
}

.image {
  object-fit: scale-down;
  width: 100%;
  height: 100%;
}

.imageWrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: 1 / 1;
}
</style>
