import { CatchErrors } from "@/utils/error"

class AuthService {
  private headers = {
    "Content-Type": "application/json",
  }

  @CatchErrors
  public async login(password: string): Promise<{ success: boolean; error?: string }> {
    const response = await fetch(`/api/auth/login`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({ password }),
      credentials: "include",
    })

    const data = await response.json()

    if (!response.ok) {
      return { success: false, error: data.error || "Connexion échouée" }
    }

    return { success: true }
  }

  @CatchErrors
  public async logout(): Promise<{ success: boolean; error?: string }> {
    const response = await fetch(`/api/auth/logout`, {
      method: "POST",
      credentials: "include",
    })

    if (!response.ok) {
      const data = await response.json()
      return { success: false, error: data.error || "Déconnexion échouée" }
    }

    return { success: true }
  }
}

export default new AuthService()
