<script lang="ts" setup>
import { useCategoryStore } from '@/stores/CategoryStore'
import type { Category } from '@/types/categoriesTypes'
import { computed } from 'vue'

const categoryStore = useCategoryStore()

type PropTypes = {
  categoryId: string
}

const props = defineProps<PropTypes>()
console.log('props', props)

categoryStore.fetchCategory(props.categoryId)
const category = computed(() => {
  return categoryStore.category
})

// console.log('category', category.value.data)
</script>

<template>
  <div v-if="category.isLoading" class="loading">Loading...</div>

  <div v-if="category.error" class="error">{{ category.error }}</div>

  <div v-if="category.data">
    <h2>Category: {{ category.data.name }}</h2>
    <p>id: {{ props.categoryId }}</p>
  </div>

  <p v-else>Loading Category...</p>
</template>

<style scoped></style>
