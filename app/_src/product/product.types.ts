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
    version: {
      label: string
    }
  }[]
}
