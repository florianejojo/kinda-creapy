import { usePricesStore } from "@/app/_src/prices/features/getPrices/getPrices.store"
import { productApi } from "@/app/_src/product/product.api"
import { useProductStore } from "@/app/_src/product/productStore"
import { FETCH_STATUS } from "@/app/_src/shared/shared.types"

export const displayProductsUseCase = async () => {
  const { setProducts, setFetchingStatus, setErrorMessage } =
    useProductStore.getState()

  const { getProductPrice } = usePricesStore.getState()
  setFetchingStatus(FETCH_STATUS.loading)

  try {
    const response = await productApi.getProducts()

    const pricesByProductInStock: { [productInStockId: string]: string } = {}

    for (const product of response.data) {
      for (const stock of product.stocks) {
        if (stock.stripePriceId) {
          pricesByProductInStock[stock.id] = stock.stripePriceId
        }
      }
    }

    // const price = await getProductPrice(
    //   pricesByProductInStock[]
    // )

    const productsWithPrices = await Promise.all(
      response.data.map(async (product) => {
        const updatedStocks = await Promise.all(
          product.stocks.map(async (stock) => {
            const stripePriceId = pricesByProductInStock[stock.id]
            const price = stripePriceId
              ? await getProductPrice(stripePriceId)
              : 0

            return {
              ...stock,
              price,
            }
          })
        )

        return {
          ...product,
          stocks: updatedStocks,
        }
      })
    )

    if (response.data) {
      setProducts(productsWithPrices)
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
