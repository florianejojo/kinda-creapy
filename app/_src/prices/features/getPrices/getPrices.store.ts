import { FETCH_STATUS } from "@/app/_shared/shared.types"
import { create } from "zustand"

export type PricesStore = {
  fetchingStatus: FETCH_STATUS
  errorMessage: string | null
  getProductPrice: (productId: string) => Promise<number>
}

export const usePricesStore = create<PricesStore>((set) => ({
  fetchingStatus: FETCH_STATUS.idle,
  errorMessage: null,

  getProductPrice: async (productId: string) => {
    set({ fetchingStatus: FETCH_STATUS.loading, errorMessage: null })

    try {
      const response = await fetch("/api/stripe/price", {
        method: "POST",
        body: JSON.stringify({ priceId: productId }),
      })
      const data = await response.json()

      set({ fetchingStatus: FETCH_STATUS.success, errorMessage: null })
      return data.price.unit_amount_decimal / 100
    } catch (error: any) {
      set({
        fetchingStatus: FETCH_STATUS.error,
        errorMessage: error.message || "Failed to fetch product price",
      })
      throw error
    }
  },
}))
