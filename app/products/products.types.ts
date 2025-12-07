export type Product = {
  id: string
  title: string
  artist: string
  category: string
  images: string[]
  dimensions: string
  description: string
  available: boolean
  prices: {
    original: number
    printXXL: number
    printA3: number
    printA4: number
  }
}
