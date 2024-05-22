<script lang="ts" setup>
import { computed, ref, watch } from 'vue'
// import { useCategoriesStore } from '@/stores/CategoriesStore'
import CategoriesList from '@/components/CategoriesList.vue'
import { getCategory } from '@/utils/getCategory'
import { getProducts } from '@/utils/getProducts'
import type { Category } from '@/types/categoriesTypes'
import type { Product } from '@/types/productTypes'
import { getCategories } from '@/utils/getCategories'
import ProductsList from '@/components/ProductsList.vue'
import { useRoute } from 'vue-router'

// const categoriesStore = useCategoriesStore()
// const categories = computed(() => {
//   return categoriesStore.categories
// })
//
// categoriesStore.fetchCategories()
//
// const fetchAllProducts = async (): Promise<void> => {
//   // error.value = category.value = products.value = null
//   // isLoading.value = true
//
//   try {
//     // category.value = await getCategory(categoryId)
//     // const { productIds } = category.value
//     const products = await getProducts()
//
//     console.log('products', products)
//   } catch (err: any) {
//     // error.value = err.toString()
//   } finally {
//     // isLoading.value = false
//   }
// }
//
// fetchAllProducts()
const route = useRoute()
const categories = ref<Category[] | []>([])
const products = ref<Product[] | []>([])
const category = ref<Category | null>(null)
const isLoading = ref(false)
const error = ref(null)

const fetchCategoriesAndProducts = async () => {
  error.value = null
  categories.value = products.value = []
  isLoading.value = true

  try {
    categories.value = await getCategories()
    products.value = await getProducts()
  } catch (e: any) {
    error.value = e.toString()
  } finally {
    isLoading.value = false
  }
}

const fetchCategory = async (categoryId: string) => {
  if (route.params.categoryId !== undefined) {
    console.log('route.params.categoryId', route.params.categoryId)
    error.value = category.value = null
    isLoading.value = true

    try {
      category.value = await getCategory(categoryId)
      // console.log('categories.value', categories.value)
      console.log('category.value', category.value)
      console.log('products.value', products.value)

      categories.value = categories.value.filter(
        (item) => item.parentId === category.value.id
      )

      console.log('products.value', products.value)

      // products.value = products.value.map((product) =>
      //   product.categoryIds.filter((id) => id === category.value.id)
      // )
      products.value = products.value.filter((product) =>
        category.value.productIds.includes(product.id)
      )

      // category
    } catch (e: any) {
      error.value = e.toString()
    } finally {
      isLoading.value = false
    }
  } else {
    fetchCategoriesAndProducts()
  }
}

// fetchCategoriesAndProducts()

watch(() => route.params.categoryId as string, fetchCategory, {
  immediate: true
})
</script>

<template>
  <div>
    <div v-if="isLoading" class="loading">Loading...</div>
    <div v-if="error" class="error">
      {{ error }}
    </div>

    <CategoriesList v-if="categories" :categories="categories" />
    <ProductsList v-if="products" :products="products" />
  </div>
</template>

<style module></style>
