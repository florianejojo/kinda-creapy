import { productApi } from "@/app/_src/product/product.api"
import { useProductStore } from "@/app/_src/product/productStore"
import { FETCH_STATUS } from "@/app/_src/shared/shared.types"

export const displayProductsUseCase = async () => {
  const { setProducts, setFetchingStatus, setErrorMessage } =
    useProductStore.getState()

  setFetchingStatus(FETCH_STATUS.loading)

  try {
    const response = await productApi.getProducts()
    if (response.data) {
      setProducts(response.data)
      setFetchingStatus(FETCH_STATUS.success)
      setErrorMessage(null)
    }
  } catch (error) {
    setFetchingStatus(FETCH_STATUS.error)
    setErrorMessage("Failed to fetch products.")
  } finally {
    setFetchingStatus(FETCH_STATUS.idle)
  }
}
