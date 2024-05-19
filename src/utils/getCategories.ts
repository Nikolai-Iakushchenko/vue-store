import { storeId } from '@/constants'
import axios from '@/axiosConfig'
import type { CategoriesData, Category } from '@/types/categoriesTypes'

export const getCategories = async (): Promise<CategoriesData> => {
  const url = `https://app.ecwid.com/api/v3/${storeId}/categories`
  const { data } = await axios.get(url)
  console.log('getCategories data', data)
  return data
}
