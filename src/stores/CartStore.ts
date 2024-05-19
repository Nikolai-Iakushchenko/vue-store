import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import type { Product } from '@/types/productTypes'
import type { RemovableRef } from '@vueuse/core'

type State = {
  cart: RemovableRef<Product[]>
}

export const useCartStore = defineStore('CartStore', {
  state: (): State => ({
    cart: useStorage('cart', [])
  }),
  actions: {
    add(product: Product) {
      this.cart.push(product)
    },
    delete(productId: number) {
      this.cart = this.cart.filter((item) => item.id !== productId)
    }
  }
})
