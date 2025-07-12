export const bucketApi = {
  uploadImage: async ({ title, file }: { title: string; file: File }) => {
    const formData = new FormData()
    formData.append("title", title)
    formData.append("file", file)

    const res = await fetch("/api/bucket/insert", {
      method: "POST",
      body: formData,
    })

    return res
  },
}
