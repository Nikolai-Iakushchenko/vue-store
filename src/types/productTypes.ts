export interface Product {
  thumbnailUrl: string
  id: number
  name: string
  price: number
  description: string
  categoryIds: number[]
  defaultCategoryId: number
  volume: number
}

export type ProductData = {
  items: Product[]
}
