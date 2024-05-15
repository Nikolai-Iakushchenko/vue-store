<script lang="ts" setup>
import { useCategoryStore } from '@/stores/CategoryStore'

type PropTypes = {
  categoryId: string
}

const props = defineProps<PropTypes>()

console.log('CategoryView props', props)

const categoryStore = useCategoryStore()

// categoryStore.fetchCategory(categoryId)
</script>

<template>
  <h2>Category:</h2>
  <p>id: {{ categoryId }}</p>
</template>

<style scoped></style>
