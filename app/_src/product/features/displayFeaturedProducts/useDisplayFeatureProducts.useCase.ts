import { productApi } from "@/app/_src/product/product.api"
import { useProductStore } from "@/app/_src/product/productStore"
import { FETCH_STATUS } from "@/app/_src/shared/shared.types"

export const displayFeaturedProductsUseCase = async () => {
  const { setFeaturedProducts, setFetchingStatus, setErrorMessage } =
    useProductStore.getState()

  setFetchingStatus(FETCH_STATUS.loading)

  try {
    const response = await productApi.getFeaturedProducts()
    if (response.data) {
      setFeaturedProducts(response.data)
      setFetchingStatus(FETCH_STATUS.success)
      setErrorMessage(null)
    }
  } catch (error) {
    setFetchingStatus(FETCH_STATUS.error)
    setErrorMessage("Failed to fetch featured products.")
  } finally {
    setFetchingStatus(FETCH_STATUS.idle)
  }
}
