export const bucketApi = {
  uploadImage: async ({ title, file }: { title: string; file: File }) => {
    const res = await fetch("/api/bucket/insert", {
      method: "POST",
      body: JSON.stringify({ title, file }),
    })

    const { product } = await res.json()
    return product
  },
}
