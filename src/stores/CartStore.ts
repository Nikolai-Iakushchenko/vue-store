import { defineStore } from 'pinia'
import { uuid } from 'vue-uuid'
import { useStorage } from '@vueuse/core'
import type { Product } from '@/types/productTypes'
import type { RemovableRef } from '@vueuse/core'

export interface CartItem extends Product {
  cartId: string
}

export type State = {
  cart: RemovableRef<CartItem[]>
}

export const useCartStore = defineStore('CartStore', {
  state: (): State => ({
    cart: useStorage('cart', [])
  }),
  getters: { numberOfItems: (state) => state.cart.length },
  actions: {
    add(product: Product) {
      const cartItem = { ...product, cartId: uuid.v4() }
      this.cart.push(cartItem)
    },
    delete(cartId: string) {
      this.cart = this.cart.filter((item) => item.cartId !== cartId)
    }
  }
})
