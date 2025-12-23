export type Product = {
  id: string
  title: string
  artist: string
  category: string
  images: string[]
  dimensions: string
  description: string
  available: boolean
  availableLimited: boolean
  prices: {
    original: number
    limited: number
    printA3: number
    printA4: number
    printA5: number
  }
}
