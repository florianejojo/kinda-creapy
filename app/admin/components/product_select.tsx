"use client"

import { Select, SelectOption } from "@/app/_shared/components/select"
import { useProductStore } from "@/stores/product_store"
import React from "react"

type ProductSelectProps = {
  id: string
  currentProductId: string | null
  onSelect: (id: string | null) => void
  isDisabled?: boolean
}

export const ProductSelect: React.FC<ProductSelectProps> = ({
  id,
  currentProductId,
  onSelect,
  isDisabled,
}) => {
  const { products } = useProductStore()

  const options: SelectOption<string>[] = products.map((p) => ({
    value: p.id || "",
    label: `${p.title} - ${p.price} €${p.sold ? " (vendu)" : ""}`,
  }))

  return (
    <Select
      id={id}
      value={currentProductId ?? ""}
      onChange={(value) => onSelect(value || null)}
      options={options}
      placeholder="Nouveau produit"
      disabled={isDisabled}
    />
  )
}
