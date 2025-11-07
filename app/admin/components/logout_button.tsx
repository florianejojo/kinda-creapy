"use client"

import LoadingCircle from "@/components/loading_circle"
import authService from "@/services/auth"
import NavigationService from "@/utils/navigation"
import { useState } from "react"
import { toast } from "sonner"

export default function LogoutButton() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleLogout = async () => {
    setIsSubmitting(true)

    const { success, error } = await authService.logout()

    if (success) {
      NavigationService.navigateToMain()
    } else {
      toast.error(error || "Échec de la déconnexion")
    }

    setIsSubmitting(false)
  }

  return (
    <div className="flex justify-end items-center mb-2">
      <button
        onClick={handleLogout}
        className="text-sm font-semibold px-4 py-2 rounded border border-gray-300 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-800 transition w-48"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <div className="flex items-center justify-center">
            <LoadingCircle size={20} />
          </div>
        ) : (
          "Déconnexion"
        )}
      </button>
    </div>
  )
}
