export interface ImageDetails {
  url: string
  width: number
  height: number
}

export interface Category {
  id: number
  parentId: number
  name: string
  thumbnail: ImageDetails
  productIds: number[]
}
