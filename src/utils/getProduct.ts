import { storeId } from '@/constants'
import type { Product } from '@/types/productTypes'
import axios from 'axios'

export const getProduct = async (productId: string): Promise<Product> => {
  const productUrl = `https://app.ecwid.com/api/v3/${storeId}/products/${productId}`
  const { data } = await axios.get(productUrl)
  return data
}
