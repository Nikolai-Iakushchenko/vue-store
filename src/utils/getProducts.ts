import { storeId } from '@/constants'
import axios from '@/axiosConfig'
import type { ProductData } from '@/types/productTypes'

export const getProducts = async (
  productIds: string[]
): Promise<ProductData> => {
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
