import type { Translations } from '@/types/commonTypes'

// subscriptionSettings: SubscriptionSettings[]
// dimensions: ProductDimensions
// combinations: Variation[]
// relatedProducts: RelatedProducts
// files: ProductFile[]
// attributes: AttributeValue[]
// favorites: FavoritesStats
// categories: CategoriesInfo[]
// media: ProductMedia
// galleryImages: GalleryImages[]
// originalImage: OriginalImage[]
// shipping: ShippingSettings
// options: ProductOption[]
// tax: TaxInfo
// wholesalePrices: WholesalePrice[]
export type Product = {
  thumbnailUrl: string
  id: number
  // sku: string
  // quantity: number
  // unlimited: boolean
  // inStock: boolean
  name: string
  // nameTranslated: Translations
  price: number
  // priceInProductList: number
  // defaultDisplayedPrice: number
  // defaultDisplayedPriceFormatted: string
  // costPrice: number
  // lowestPrice: number
  // defaultDisplayedLowestPrice: number
  // defaultDisplayedLowestPriceFormatted: string
  // compareToPrice: number
  // compareToPriceFormatted: string
  // compareToPriceDiscount: number
  // compareToPriceDiscountFormatted: string
  // compareToPriceDiscountPercent: number
  // compareToPriceDiscountPercentFormatted: string
  // isShippingRequired: boolean
  // weight: number
  // url: string
  // autogeneratedSlug: string
  // customSlug: string
  // created: string
  // updated: string
  // createTimestamp: number
  // updateTimestamp: number
  // productClassId: number
  // enabled: boolean
  // warningLimit: number
  // fixedShippingRateOnly: boolean
  // fixedShippingRate: number
  // defaultCombinationId: number
  description: string
  // descriptionTranslated: Translations
  categoryIds: number[]
  defaultCategoryId: number
  // seoTitle: string
  // seoTitleTranslated: string
  // seoDescription: string
  // seoDecriptionTranslated: string
  volume: number
  // showOnFrontpage: number
  // isSampleProduct: boolean
  // isGiftCard: boolean
  // discountsAllowed: boolean
  // externalReferenceId: string
  // outOfStockVisibilityBehaviour: string
  // minPurchaseQuantity: number
  // maxPurchaseQuantity: number
}
