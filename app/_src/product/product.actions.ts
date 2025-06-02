import { Product } from "./product.types"

export const productActions = ({
  set,
}: {
  set: (
    partial: Partial<{
      featuredProducts: Product[]
      fetchingStatus: "idle" | "loading" | "error" | "success"
      errorMessage: string | null
    }>
  ) => void
}) => ({
  setFeaturedProducts: (products: Product[]) =>
    set({ featuredProducts: products }),

  setFetchingStatus: (status: "idle" | "loading" | "error" | "success") =>
    set({ fetchingStatus: status }),

  setErrorMessage: (message: string | null) => set({ errorMessage: message }),
})
