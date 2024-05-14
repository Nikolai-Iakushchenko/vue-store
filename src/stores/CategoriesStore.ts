import { defineStore } from 'pinia'
import { storeId } from '@/constants'
import axios from '../axiosConfig'
import type { Categories } from '@/types/categoriesTypes'

type State = {
  categories: Categories
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
    getCategories(state): Categories {
      return state.categories
    }
  },
  actions: {
    async fetchCategories() {
      const url = `https://app.ecwid.com/api/v3/${storeId}/categories`

      try {
        this.categories.isLoading = true
        const response = await axios.get(url)
        console.log('response', response)
        this.categories.data = response.data
      } catch (error) {
        console.log(error)
        this.categories.error = error
      } finally {
        this.categories.isLoading = false
      }
    }
  }
})
