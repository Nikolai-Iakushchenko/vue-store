<script lang="ts" setup>
import type { Product } from '@/types/productTypes'
import { useCartStore } from '@/stores/CartStore'

type PropTypes = {
  product: Product
}

const props = defineProps<PropTypes>()

const cartStore = useCartStore()
</script>

<template>
  <li :class="$style.category">
    <RouterLink :to="`/product/${props.product.id}`">
      <div :class="$style.imageWrapper">
        <img
          :alt="props.product.name"
          :class="$style.image"
          :src="props.product.thumbnailUrl"
        />
      </div>
      <div>
        <div>{{ props.product.name }}</div>
        <div>Price: {{ props.product.price }}</div>
        <button @click.prevent="(e) => cartStore.add(product!)">Buy</button>
      </div>
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
