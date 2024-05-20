export type ImageDetails = {
  url: string
  width: number
  height: number
}

export type Category = {
  id: number
  parentId: number
  name: string
  thumbnail: ImageDetails
  productIds: number[]
}

export type CategoriesData = {
  items: Category[]
}
