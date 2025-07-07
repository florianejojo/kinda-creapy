"use client"

import { createNewProductUseCase } from "@/app/_src/product/features/createNewProduct/createNewProduct.useCase"
import { InputField } from "@/app/_src/product/ui/editProducts/InputField"
import { InputImage } from "@/app/_src/product/ui/editProducts/InputImage"
import { Button } from "@/app/_src/shared/ui/Button"
import { useState } from "react"

interface ArtVersion {
  id: string
  type: string
  size: string
  price: number
  stock: number
}

interface Artwork {
  id: string
  title: string
  artist: string
  description: string
  category: string
  image: string
  versions: ArtVersion[]
  createdAt: string
}

export const CreateProduct = () => {
  // fais moi un composant en dur html avec un bouton et un formulaire pour ajouter un produit avec une image et un titre

  const [error, setError] = useState<string | null>(null)
  const [title, setTitle] = useState<string>("")
  const [file, setFile] = useState<File | null>(null)
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [artworks, setArtworks] = useState<Artwork[]>([])

  const createProduct = async () => {
    console.log({
      title,
      images: [file],
    })
    if (!title || !file) {
      setError("Veuillez remplir tous les champs.")
      return
    }

    createNewProductUseCase({
      title,
      images: [file],
    })
  }

  return (
    <div className="p-4 space-y-4   border-2 text-black">
      <h2>Ajouter un nouveau produit</h2>
      <InputField
        placeholder="Titre du produit"
        value={title}
        label={""}
        onChange={(title) => setTitle(title)}
      />
      <InputImage onChange={(file) => setFile(file)} />
      <Button onClick={createProduct}>
        Ajouter
        {/* {isSubmitting ? "Ajout en cours..." : "Ajouter"} */}
      </Button>
    </div>
  )
}
