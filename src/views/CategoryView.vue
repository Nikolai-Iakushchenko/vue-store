<script lang="ts" setup>
import { useCategoryStore } from '@/stores/CategoryStore'

type PropTypes = {
  // id: string
}

const props = defineProps<PropTypes>()

const categoryStore = useCategoryStore()

// categoryStore.fetchCategory(categoryId)
</script>

<template>
  <h2>Category:</h2>
  <p>id:</p>
</template>

<style scoped></style>