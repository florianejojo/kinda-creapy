import { create } from "zustand"

import { buyProductActions } from "@/app/_src/cart/features/buyProduct/buyProduct.actions"
import { FETCH_STATUS } from "@/app/_src/shared/shared.types"

export type BuyProductActions = {
  setFetchingStatus: (status: FETCH_STATUS) => void
  setErrorMessage: (message: string | null) => void
}

export type ProductStore = {
  fetchingStatus: FETCH_STATUS
  errorMessage: string | null
} & BuyProductActions

export const useBuyProductStore = create<ProductStore>((set) => ({
  fetchingStatus: FETCH_STATUS.idle,
  errorMessage: null,

  ...buyProductActions({ set }),
}))
