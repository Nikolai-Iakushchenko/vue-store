import { storeId } from '@/constants'
import axios from '@/axiosConfig'
import type { Category } from '@/types/categoriesTypes'
import type { Product } from '@/types/productTypes'
import type { Products } from '@/types/commonTypes'

export const getProducts = async (categoryId: string): Promise<Products> => {
  const categoryUrl = `https://app.ecwid.com/api/v3/${storeId}/categories/${categoryId}`
  const productsSearchUrl = `https://app.ecwid.com/api/v3/${storeId}/products`

  const { data: categoryData } = await axios.get(categoryUrl)

  const productIds = categoryData.productIds.map(Number).join(',')

  const productSearchParams = {
    productId: productIds
  }

  const productsResponse = await axios.get(productsSearchUrl, {
    params: productSearchParams
  })

  const { data: productsData } = productsResponse

  return { category: categoryData, products: productsData }
}
