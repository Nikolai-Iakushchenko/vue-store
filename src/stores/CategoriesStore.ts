import { defineStore } from 'pinia'
import { storeId } from '@/constants'
// import axios from 'axios'
import axios from '../axiosConfig'

export const useCategoriesStore = defineStore('CategoriesStore', {
  state: () => ({
    categories: []
  }),
  getters: {
    getCategories(state) {
      return state.categories
    }
  },
  actions: {
    async fetchCategories() {
      const url = `https://app.ecwid.com/api/v3/${storeId}/categories`

      try {
        const response = await axios.get(url)
        console.log('response', response)
        // @ts-ignore
        this.categories = response
      } catch (error) {
        console.log(error)
      }
    }
  }
})
