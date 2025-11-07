import { supabase } from "@/lib/supabaseClient"
import { Product } from "@/models/product_model"
import { create } from "zustand"

interface ProductStore {
  products: Product[]
  setProducts: (newProducts: Product[]) => void
  removeProduct: (productId: string) => void
  updateOrAddProduct: (newProduct: Product) => void
  fetchProducts: () => Promise<void>
  findProductById: (id: string) => Product | null
  isLoading: boolean
  error: string | null
}

export const useProductStore = create<ProductStore>((set, get) => ({
  products: [],
  setProducts: (newProducts: Product[]) => {
    set({ products: newProducts })
  },
  removeProduct: (productId: string) => {
    set({
      products: get().products?.filter((inst) => inst.id !== productId) || [],
    })
  },
  updateOrAddProduct: (newProduct: Product) => {
    set({
      products: get().products.some((inst) => inst.id === newProduct.id)
        ? get().products.map((inst) => (inst.id === newProduct.id ? newProduct : inst))
        : [...get().products, newProduct],
    })
  },
  fetchProducts: async () => {
    if (get().products.length > 0) return

    set({ isLoading: true })

    const { data, error } = await supabase.from("products").select("*")

    const normalized = data?.map((product) => ({
      ...product,
      images: product.images.map((path: string) => ({
        path,
        url: supabase.storage.from("products").getPublicUrl(path).data.publicUrl,
      })),
    }))

    set({
      products: error ? [] : normalized ?? [],
      error: error?.message ?? null,
      isLoading: false,
    })
  },
  findProductById: (id: string) => {
    return get().products.find((product) => product.id === id) || null
  },
  isLoading: true,
  error: null,
}))
