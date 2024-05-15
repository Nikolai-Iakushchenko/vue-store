import { defineStore } from 'pinia'
import { storeId } from '@/constants'
import axios from '../axiosConfig'
import type { Category } from '@/types/categoriesTypes'

export type CategoryStore = {
  data: Category | null
  isLoading: boolean
  error: null | unknown
}

type State = {
  category: CategoryStore
}

export const useCategoryStore = defineStore('CategoryStore', {
  state: (): State => ({
    category: {
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
        console.log('response', response)
        this.category.data = response.data
      } catch (error) {
        console.log(error)
        this.category.error = error
      } finally {
        this.category.isLoading = false
      }
    }
  }
})
