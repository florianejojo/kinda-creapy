"use client"

import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import InputField from "@/app/_shared/components/input_field"
import LoadingCircle from "@/app/_shared/components/loading_circle"
import authService from "@/services/auth"
import NavigationService from "@/utils/navigation"
import { toast } from "sonner"

export default function LoginPage() {
  const searchParams = useSearchParams()

  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (searchParams.get("session") === "expired") {
      toast.error("Session expirée")
    }
  }, [searchParams.toString()])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    const result = await authService.login(password)
    if (result.success) {
      NavigationService.navigateToAdmin()
    } else {
      toast.error(result.error || "Connexion échouée")
    }
    setIsLoading(false)
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="mx-auto flex flex-col gap-8 row-start-2 items-center sm:items-start max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Connexion</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
          <InputField
            id="password"
            label="Mot de passe"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="current-password"
          />
          <button
            type="submit"
            className="bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc] font-semibold py-2 px-4 rounded transition-colors border-2"
            disabled={isLoading}
          >
            Se connecter
          </button>
        </form>
        <div className="flex items-center space-x-4 h-6">
          {isLoading && (
            <>
              <LoadingCircle />
              <span className="font-bold">Traitement en cours…</span>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
