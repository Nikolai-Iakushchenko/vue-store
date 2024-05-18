import { defineStore } from 'pinia'
import { storeId } from '@/constants'
import axios from '../axiosConfig'
import type { Category } from '@/types/categoriesTypes'
import type { Product } from '@/types/productTypes'

type State = {
  category: Category | null
  products: Product[] | null
  isLoading: boolean
  error: unknown | null
}

export const useCategoryStore = defineStore('CategoryStore', {
  state: (): State => ({
    category: null,
    products: null,
    isLoading: false,
    error: null
  }),
  getters: {
    getCategory(state): Category | null {
      return state.category
    },
    getProducts(state): Product[] | null {
      return state.products
    }
  },
  actions: {
    async fetchCategory(categoryId: string) {
      const url = `https://app.ecwid.com/api/v3/${storeId}/categories/${categoryId}`
      const productsSearchUrl = `https://app.ecwid.com/api/v3/${storeId}/products`

      try {
        this.products = null
        this.isLoading = true
        const response = await axios.get(url)
        console.log('fetchCategory response.data:', response.data)
        this.category = response.data

        const productIds = response.data.productIds.map(Number).join(',')

        const productSearchParams = {
          productId: productIds
        }

        const productsResponse = await axios.get(productsSearchUrl, {
          params: productSearchParams
        })

        console.log('productsResponse', productsResponse)
        this.products = productsResponse.data
      } catch (error: unknown) {
        console.log(error)
        this.error = error
      } finally {
        this.isLoading = false
      }
    }
  }
})
