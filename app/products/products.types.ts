export type Product = {
  id: string
  title: string
  artist: string
  category: string
  images: string[]
  dimensions: string
  description: string
  // original available for sale
  available: boolean
  // limited edition available for sale
  availableLimited: boolean
  prices: {
    original: number
    limited: number
    printA3: number
    printA4: number
    printA5: number
  }
}
