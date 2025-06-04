import { create } from "zustand"
import { Product } from "./product.types"
import { productActions } from "@/app/_src/product/product.actions"

type ProductActions = {
  setFeaturedProducts: (products: Product[]) => void
  setProducts: (products: Product[]) => void

  setFetchingStatus: (status: "idle" | "loading" | "error" | "success") => void
  setErrorMessage: (message: string | null) => void
}

type ProductStore = {
  fetchingStatus: "idle" | "loading" | "error" | "success"
  errorMessage: string | null
  featuredProducts: Product[]
  products: Product[]
} & ProductActions

export const useProductStore = create<ProductStore>((set) => ({
  fetchingStatus: "idle",
  errorMessage: null,
  featuredProducts: [],
  products: [],

  ...productActions({ set }),
}))
