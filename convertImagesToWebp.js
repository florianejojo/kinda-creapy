const fs = require("fs")
const path = require("path")
const { exec } = require("child_process")

const convertToWebpIfNeeded = (directory) => {
  fs.readdir(directory, (err, files) => {
    if (err) {
      console.error("Erreur lors de la lecture du répertoire:", err)
      return
    }

    files.forEach((file) => {
      console.log(file)
      const ext = path.extname(file).toLowerCase()
      const fileNameWithoutExt = path.basename(file, ext)

      // Vérifie si le fichier est une image (ajouter d'autres extensions si nécessaire)
      if ([".heic", ".png", ".jpg", ".jpeg", ".tiff"].includes(ext)) {
        const webpFilePath = path.join(directory, `${fileNameWithoutExt}.webp`)
        console.log(webpFilePath)
        // Si le fichier .webp n'existe pas encore, on le crée
        if (!fs.existsSync(webpFilePath)) {
          const originalFilePath = path.join(directory, file)

          console.log(`Conversion de ${originalFilePath} en ${webpFilePath}`)

          // Utilisation d'ImageMagick pour la conversion
          exec(`magick "${originalFilePath}" "${webpFilePath}"`, (error, stdout, stderr) => {
            if (error) {
              console.error(`Erreur lors de la conversion de ${file}:`, error)
              return
            }
            console.log(`Fichier converti avec succès: ${webpFilePath}`)
          })
        } else {
          console.log(`Le fichier ${webpFilePath} existe déjà, conversion ignorée.`)
        }
      }
    })
  })
}

const deleteNonWebpFiles = (directory) => {
  fs.readdir(directory, (err, files) => {
    if (err) {
      console.error("Erreur lors de la lecture du répertoire:", err)
      return
    }

    files.forEach((file) => {
      const ext = path.extname(file).toLowerCase()

      // Vérifie si le fichier n'est pas un .webp
      if (ext !== ".webp") {
        const filePath = path.join(directory, file)

        // Supprime le fichier
        fs.unlink(filePath, (err) => {
          if (err) {
            console.error(`Erreur lors de la suppression du fichier ${file}:`, err)
            return
          }
          console.log(`Fichier supprimé : ${file}`)
        })
      }
    })
  })
}

// Appel de la fonction avec le chemin vers le dossier
const directoryPath = "/Users/florianelefebvre/Desktop/remy-portfolio/public/images/artpieces"
deleteNonWebpFiles(directoryPath)

convertToWebpIfNeeded(directoryPath)
