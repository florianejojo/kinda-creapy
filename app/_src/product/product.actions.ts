import { FETCH_STATUS } from "@/app/_shared/shared.types"
import { Product } from "@/app/products/products.types"

export const productActions = ({
  set,
  get,
}: {
  get: () => {
    products: Product[]
    featuredProducts: Product[]
    fetchingStatus: FETCH_STATUS
    errorMessage: string | null
  }
  set: (
    partial: Partial<{
      products: Product[]
      featuredProducts: Product[]
      fetchingStatus: FETCH_STATUS
      errorMessage: string | null
    }>,
  ) => void
}) => ({
  setFeaturedProducts: (products: Product[]) => set({ featuredProducts: products }),

  setProducts: (products: Product[]) => set({ products }),

  setFetchingStatus: (status: FETCH_STATUS) => set({ fetchingStatus: status }),

  setErrorMessage: (message: string | null) => set({ errorMessage: message }),
})
