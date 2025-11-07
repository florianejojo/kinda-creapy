import { UnauthorizedException } from "@/utils/error"

export async function handleResponse<T>(
  response: Response,
): Promise<{ success: boolean; data?: T; error?: string }> {
  if (response.status === 401) {
    throw new UnauthorizedException("Session expired")
  } else if (!response.ok) {
    try {
      const json = await response.json()

      if (Array.isArray(json) && json[0]?.constraints) {
        const all = (json as any[]).flatMap((err) => Object.values(err.constraints))
        return { success: false, error: all.join("; ") }
      }

      if (json.errors && Array.isArray(json.errors)) {
        const all = (json.errors as { path: string; messages: string[] }[]).flatMap((e) =>
          e.messages.map((msg) => `${e.path}: ${msg}`),
        )
        return { success: false, error: all.join("; ") }
      }

      if (json.error) {
        const msg = Array.isArray(json.error) ? json.error.join("; ") : json.error
        return { success: false, error: msg }
      }

      return { success: false, error: json.error ?? response.statusText }
    } catch {
      return { success: false, error: response.statusText }
    }
  }

  const contentType = response.headers.get("content-type")
  const data =
    contentType && contentType.includes("application/json") ? await response.json() : undefined

  return { success: true, data: data as T }
}
