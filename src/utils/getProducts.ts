import { storeId } from '@/constants'
import axios from '@/axiosConfig'
import type { Category } from '@/types/categoriesTypes'
import type { Product } from '@/types/productTypes'
import type { Products } from '@/types/commonTypes'

export const getProducts = async (productIds: string[]): Promise<Products> => {
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
