<script lang="ts" setup>
type PropTypes = {
  categoryName: string
  id: string
}

const props = defineProps<PropTypes>()
</script>

<template>
  <h2>Category: {{ categoryName }}</h2>
  <p>id:</p>
</template>

<style scoped></style>
