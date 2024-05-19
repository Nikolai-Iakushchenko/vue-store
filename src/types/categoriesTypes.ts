import type { ImageDetails } from '@/types/commonTypes'

export type Category = {
  id: number
  name: string
  thumbnail: ImageDetails
  productIds: number[]
}

export type CategoriesData = {
  total: number
  count: number
  offset: number
  limit: number
  items: Category[]
}
