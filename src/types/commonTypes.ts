import type { Category } from '@/types/categoriesTypes'
import type { Product } from '@/types/productTypes'

export type ImageDetails = {
  url: string
  width: number
  height: number
}

export type Translations = { '<ISO_LANG_CODE>': string }

export type Alts = {
  main: string
  '<ISO_LANG_CODE>': string
}

export type Products = {
  category: Category
  products: Product[]
}
