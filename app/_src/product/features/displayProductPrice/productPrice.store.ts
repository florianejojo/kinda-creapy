import { create } from "zustand"

import { FETCH_STATUS } from "@/app/_src/shared/shared.types"

export type ProductPriceStore = {
  fetchingStatus: FETCH_STATUS
  errorMessage: string | null
}

export const useBuyProductStore = create<ProductPriceStore>((set) => ({
  fetchingStatus: FETCH_STATUS.idle,
  errorMessage: null,

  getProductPrice: async (productId: string) => {
    set({ fetchingStatus: FETCH_STATUS.loading, errorMessage: null })

    try {
      // Simulate an API call to fetch product price
      const response = await fetch(`/api/products/${productId}/price`)
      if (!response.ok) {
        throw new Error("Failed to fetch product price")
      }
      const data = await response.json()

      set({ fetchingStatus: FETCH_STATUS.success, errorMessage: null })
      return data.price
    } catch (error) {
      set({
        fetchingStatus: FETCH_STATUS.error,
        errorMessage: error.message || "Failed to fetch product price",
      })
      throw error
    }
  },
}))

//
