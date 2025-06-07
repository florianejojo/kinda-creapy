export type Product = {
  id: string
  title: string
  description: string
  images: {
    url: string
    alt: string
  }[]
  stocks: {
    id: string
    quantity: number
    stripePriceId: string
    price: number
    version: {
      label: string
    }
  }[]
}
