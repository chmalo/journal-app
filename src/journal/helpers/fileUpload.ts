export const fileUpload = async (file: any) => {
  if (!file) {
    throw new Error("No hay archivos por subir.")
  }

  const cloudUrl = "https://api.cloudinary.com/v1_1/cursos-2022/upload"
  const formData = new FormData()

  formData.append("upload_preset", "react-journal")
  formData.append("file", file)

  try {
    const resp = await fetch(cloudUrl, { method: "POST", body: formData })

    if (!resp.ok) {
      throw new Error("No se pudo subir imagen")
    }

    const cloudResponse = await resp.json()

    return cloudResponse.secure_url
  } catch (error: any) {
    console.log(error)
    throw new Error(error.message)
  }
}
