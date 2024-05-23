import type { Product } from '@/types/productTypes'
import type { RemovableRef } from '@vueuse/core'

export interface CartItem extends Product {
  cartId: string
}

export interface CartState {
  cart: RemovableRef<CartItem[]>
}
