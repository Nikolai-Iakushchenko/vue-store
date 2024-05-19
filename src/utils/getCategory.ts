import { storeId } from '@/constants'
import axios from '@/axiosConfig'
import type { Category } from '@/types/categoriesTypes'

export const getCategory = async (categoryId: string): Promise<Category> => {
  const categoryUrl = `https://app.ecwid.com/api/v3/${storeId}/categories/${categoryId}`

  const { data } = await axios.get(categoryUrl)

  return data
}
