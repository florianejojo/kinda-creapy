import { ProductStore } from "@/app/_src/cart/features/buyProduct/buyProduct.store"
import { FETCH_STATUS } from "@/app/types/types"

export type BuyProductActionProps = {
  set: (partial: Partial<ProductStore>) => void
}

export const buyProductActions = ({ set }: BuyProductActionProps) => ({
  setFetchingStatus: (status: FETCH_STATUS) => set({ fetchingStatus: status }),
  setErrorMessage: (message: string | null) => set({ errorMessage: message }),
})
