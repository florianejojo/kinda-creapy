export const pricesApi = {
  getPrice: async (priceId: string) => {
    const response = await fetch("/api/prices", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })

    if (!response.ok) {
      throw new Error("Failed to fetch prices")
    }

    return response.json()
  },
}
