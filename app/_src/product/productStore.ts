import { create } from "zustand"
import { persist } from "zustand/middleware"
import { Product } from "./product.types"
import { productActions } from "@/app/_src/product/product.actions"
import { FETCH_STATUS } from "@/app/_src/shared/shared.types"

type ProductActions = {
  setFeaturedProducts: (products: Product[]) => void
  setProducts: (products: Product[]) => void

  setFetchingStatus: (status: FETCH_STATUS) => void
  setErrorMessage: (message: string | null) => void
}

type ProductStore = {
  fetchingStatus: FETCH_STATUS
  errorMessage: string | null
  featuredProducts: Product[]
  products: Product[]
} & ProductActions

export const useProductStore = create<ProductStore>()(
  persist(
    (set, get) => ({
      fetchingStatus: FETCH_STATUS.idle,
      errorMessage: null,
      featuredProducts: [],
      products: [],

      ...productActions({ set, get }),
    }),
    {
      name: "product-store",
      partialize: (state) => ({
        products: state.products,
        featuredProducts: state.featuredProducts,
      }),
    }
  )
)
