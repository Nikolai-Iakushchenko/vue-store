type ImageDetails = {
  url: string
  width: number
  height: number
}

type Translations = { '<ISO_LANG_CODE>': string }

type Alts = {
  main: string
  '<ISO_LANG_CODE>': string
}

type Category = {
  id: number
  parentId: number
  orderBy: number
  hdThumbnailUrl: string
  thumbnailUrl: string
  imageUrl: string
  originalImageUrl: string
  originalImage: ImageDetails
  name: string
  thumbnail: ImageDetails
  nameTranslated: Translations
  origin: string
  url: string
  autogeneratedSlug: string
  customSlug: string
  productCount: number
  enabledProductCount: number
  description: string
  descriptionTranslated: Translations
  enabled: boolean
  productIds: number[]
  seoTitle: string
  seoTitleTranslated: string
  seoDescription: string
  seoDecriptionTranslated: string
  alt: Alts
}

type CategoriesData = {
  total: number
  count: number
  offset: number
  limit: number
  items: Category[]
}

export type Categories = {
  data: CategoriesData | null
  isLoading: boolean
  error: null | unknown
}
