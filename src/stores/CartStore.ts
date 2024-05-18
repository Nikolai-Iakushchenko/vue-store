import { defineStore } from 'pinia'
import type { Product } from '@/types/productTypes'

type State = {
  cart: Product[]
}

export const useCartStore = defineStore('CartStore', {
  state: (): State => ({
    cart: []
  }),
  actions: {
    add(product: Product) {
      this.cart.push(product)
    }
  }
})
