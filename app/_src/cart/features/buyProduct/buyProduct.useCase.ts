import { cartInterfaceApi } from "@/app/_src/cart/cartInterface.api"
import { useBuyProductStore } from "@/app/_src/cart/features/buyProduct/buyProduct.store"
import { FETCH_STATUS } from "@/app/_src/shared/shared.types"

export const buyProductUseCase = async (product) => {
  const { setFetchingStatus, setErrorMessage } = useBuyProductStore.getState()
  setFetchingStatus(FETCH_STATUS.loading)

  try {
    const session = await cartInterfaceApi.fetchClientSecret()
    console.log({ session })
  } catch (error) {
    setFetchingStatus(FETCH_STATUS.error)
    setErrorMessage("Failed to Open session.")
  } finally {
    setFetchingStatus(FETCH_STATUS.idle)
  }
}
