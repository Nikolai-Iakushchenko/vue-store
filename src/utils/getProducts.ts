import { storeId } from '@/constants'
import axios from '@/axiosConfig'
import type { Category } from '@/types/categoriesTypes'
import type { Product } from '@/types/productTypes'

export const getProducts = async (productIds: string[]): Promise<Product[]> => {
  const productsSearchUrl = `https://app.ecwid.com/api/v3/${storeId}/products`

  const listOfProductIds = productIds.map(Number).join(',')

  const productSearchParams = {
    productId: listOfProductIds
  }

  const productsResponse = await axios.get(productsSearchUrl, {
    params: productSearchParams
  })

  const { data } = productsResponse

  return data
}
