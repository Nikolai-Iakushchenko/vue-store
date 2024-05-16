import { defineStore } from 'pinia'
import { storeId } from '@/constants'
import axios from '../axiosConfig'
import type { Category } from '@/types/categoriesTypes'

export type CategoryStore = {
  data: Category | null
  isLoading: boolean
  error: null | unknown
}

export type ProductStore = {
  data: Product[] | null
  isLoading: boolean
  error: null | unknown
}

type State = {
  category: CategoryStore
  products: ProductStore
}

export const useCategoryStore = defineStore('CategoryStore', {
  state: (): State => ({
    category: {
      data: null,
      isLoading: false,
      error: null
    },
    products: {
      data: null,
      isLoading: false,
      error: null
    }
  }),
  getters: {
    getCategory(state): CategoryStore {
      return state.category
    }
  },
  actions: {
    async fetchCategory(categoryId: string) {
      const url = `https://app.ecwid.com/api/v3/${storeId}/categories/${categoryId}`

      try {
        this.category.isLoading = true
        const response = await axios.get(url)
        console.log('fetchCategory response.data:', response.data)
        this.category.data = response.data

        const productUrls = response.data.productIds.map(
          (productId: string) => `https://app.ecwid.com/api/v3/${storeId}/products/${productId}`
        )
        console.log('productUrls:', productUrls)

        const productsResponse = await Promise.all(productUrls.map((url: string) => axios.get(url)))

        console.log('productsResponse', productsResponse)
        this.products.data = productsResponse.data
      } catch (error) {
        console.log(error)
        this.category.error = error
      } finally {
        this.category.isLoading = false
      }
    }
  }
})
