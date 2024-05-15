<script lang="ts" setup>
import { useCategoryStore } from '@/stores/CategoryStore'
import type { Category } from '@/types/categoriesTypes'

const categoryStore = useCategoryStore()

type PropTypes = {
  categoryId: string
}

const props = defineProps<PropTypes>()
console.log('props', props)

categoryStore.fetchCategory(props.categoryId)
</script>

<template>
  <h2>Category:</h2>
  <p>id: {{ props.categoryId }}</p>
</template>

<style scoped></style>
