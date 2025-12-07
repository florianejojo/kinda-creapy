import { FETCH_STATUS } from "@/app/_shared/shared.types"
import { ProductStore } from "@/app/_src/cart/features/buyProduct/buyProduct.store"

export type BuyProductActionProps = {
  set: (partial: Partial<ProductStore>) => void
}

export const buyProductActions = ({ set }: BuyProductActionProps) => ({
  setFetchingStatus: (status: FETCH_STATUS) => set({ fetchingStatus: status }),
  setErrorMessage: (message: string | null) => set({ errorMessage: message }),
})
