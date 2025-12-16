import { ProductDTO } from "@/models/product_model"

import { CatchErrors } from "@/utils/error"
import { handleResponse } from "./utils"

class ProductService {
  private headers = {
    "Content-Type": "application/json",
  }

  private createProductFormData(product: ProductDTO): FormData {
    const formData = new FormData()

    formData.append("data", JSON.stringify(product))

    product.images.forEach((image, index) => {
      if (image.file) {
        formData.append(`image_${index}`, image.file)
      }
    })

    return formData
  }

  @CatchErrors
  public async createProduct(
    product: ProductDTO,
  ): Promise<{ success: boolean; data?: string; error?: string }> {
    const formData = this.createProductFormData(product)
    console.log({ formData })

    const response = await fetch(`/api/products`, {
      method: "POST",
      body: formData,
      credentials: "include",
    })

    return handleResponse<string>(response)
  }

  @CatchErrors
  public async updateProduct(product: ProductDTO): Promise<{ success: boolean; error?: string }> {
    const formData = this.createProductFormData(product)

    const response = await fetch(`/api/products/${product.id}`, {
      method: "PUT",
      body: formData,
      credentials: "include",
    })

    return handleResponse<void>(response)
  }

  @CatchErrors
  public async deleteProduct(productId: string): Promise<{ success: boolean; error?: string }> {
    const response = await fetch(`/api/products/${productId}`, {
      method: "DELETE",
      headers: this.headers,
      credentials: "include",
    })

    return handleResponse<void>(response)
  }
}

export default new ProductService()
