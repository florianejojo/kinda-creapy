import { Product } from "@/app/products/products.types"
import { Modal } from "@mui/material"
import { useState } from "react"

type ModalChoseOptionProps = {
  painting: Product
  isOpen: boolean
  handleSubmitPurchase: (option: string) => void
}

export const ModalChoseOption = ({
  painting,
  isOpen,
  handleSubmitPurchase,
}: ModalChoseOptionProps) => {
  const [selectedFormat, setSelectedFormat] = useState<string>("")

  if (!painting) return null
  return (
    <Modal open={isOpen} onClose={() => handleSubmitPurchase("")}>
      <form
        onSubmit={() => {
          console.log("submit purchase")
        }}
        className="space-y-6"
      >
        <div className="space-y-4">
          <label className="text-sm text-foreground block font-medium">Format souhaité</label>

          {/* Oeuvre originale */}
          {painting.available && (
            <label className="flex items-center gap-3 cursor-pointer group p-3 border border-border hover:border-primary transition">
              <input
                type="radio"
                name="format"
                value="original"
                checked={selectedFormat === "original"}
                onChange={(e) => setSelectedFormat(e.target.value)}
                className="w-4 h-4 accent-primary"
                required
              />
              <span className="text-sm text-foreground group-hover:text-primary transition flex-1 font-medium">
                Œuvre originale
              </span>
              <span className="text-sm text-foreground font-medium">
                {painting.prices.original}€
              </span>
            </label>
          )}

          {/* Tirage limité */}
          {painting.availableLimited && (
            <div className="space-y-2">
              <label className="flex items-center gap-3 cursor-pointer group p-3 border border-border hover:border-primary transition">
                <input
                  type="radio"
                  name="format"
                  value="limited"
                  checked={selectedFormat === "limited"}
                  onChange={(e) => setSelectedFormat(e.target.value)}
                  className="w-4 h-4 accent-primary"
                  required
                />
                <span className="text-sm text-foreground group-hover:text-primary transition flex-1">
                  Tirage limité
                </span>
                <span className="text-sm text-foreground font-medium">100€</span>
              </label>
            </div>
          )}

          {/* Tirages classiques */}
          {!painting.availableLimited && (
            <div className="space-y-2">
              <p className="text-xs text-muted-foreground pl-3">Tirages classiques</p>
              <label className="flex items-center gap-3 cursor-pointer group p-3 border border-border hover:border-primary transition">
                <input
                  type="radio"
                  name="format"
                  value="A3"
                  checked={selectedFormat === "A3"}
                  onChange={(e) => setSelectedFormat(e.target.value)}
                  className="w-4 h-4 accent-primary"
                  required
                />
                <span className="text-sm text-foreground group-hover:text-primary transition flex-1">
                  Format A3
                </span>
                <span className="text-sm text-foreground font-medium">{painting.prices.A3}€</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer group p-3 border border-border hover:border-primary transition">
                <input
                  type="radio"
                  name="format"
                  value="A4"
                  checked={selectedFormat === "A4"}
                  onChange={(e) => setSelectedFormat(e.target.value)}
                  className="w-4 h-4 accent-primary"
                  required
                />
                <span className="text-sm text-foreground group-hover:text-primary transition flex-1">
                  Format A4
                </span>
                <span className="text-sm text-foreground font-medium">{painting.prices.A4}€</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer group p-3 border border-border hover:border-primary transition">
                <input
                  type="radio"
                  name="format"
                  value="A5"
                  checked={selectedFormat === "A5"}
                  onChange={(e) => setSelectedFormat(e.target.value)}
                  className="w-4 h-4 accent-primary"
                  required
                />
                <span className="text-sm text-foreground group-hover:text-primary transition flex-1">
                  Format A5
                </span>
                <span className="text-sm text-foreground font-medium">{painting.prices.A5}€</span>
              </label>
            </div>
          )}
        </div>

        <button
          type="submit"
          disabled={!selectedFormat}
          className="w-full bg-primary text-primary-foreground py-3 hover:bg-primary/90 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Envoyer la demande
        </button>
      </form>
    </Modal>
  )
}
