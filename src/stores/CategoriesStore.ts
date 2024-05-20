import { defineStore } from 'pinia'
import { storeId } from '@/constants'
import axios from '../axiosConfig'
import type { CategoriesData } from '@/types/categoriesTypes'

export type CategoriesStore = {
  data: CategoriesData | null
  isLoading: boolean
  error: null | unknown
}

type State = {
  categories: CategoriesStore
}

export const useCategoriesStore = defineStore('CategoriesStore', {
  state: (): State => ({
    categories: {
      data: null,
      isLoading: false,
      error: null
    }
  }),
  getters: {
    getCategories(state): CategoriesStore {
      return state.categories
    }
  },
  actions: {
    async fetchCategories() {
      const url = `https://app.ecwid.com/api/v3/${storeId}/categories`

      try {
        this.categories.isLoading = true
        const response = await axios.get(url)
        this.categories.data = response.data
      } catch (err) {
        this.categories.error = err
      } finally {
        this.categories.isLoading = false
      }
    }
  }
})