const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");

// Fonction pour réduire la qualité de l'image et écraser le fichier original
const reduceImageQuality = (inputPath, quality = 50) => {
    // Commande ImageMagick pour réduire la qualité de l'image
    const command = `magick "${inputPath}" -quality ${quality} "${inputPath}"`;

    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(
                `Erreur lors de la réduction de qualité : ${error.message}`
            );
            return;
        }
        console.log(`Qualité de l'image réduite : ${inputPath}`);
    });
};

// Fonction pour parcourir un répertoire et traiter chaque image
const processImagesInDirectory = (directory, quality) => {
    fs.readdir(directory, (err, files) => {
        if (err) {
            console.error("Erreur lors de la lecture du répertoire:", err);
            return;
        }

        files.forEach((file) => {
            const ext = path.extname(file).toLowerCase();

            // Vérifier si le fichier est une image (ajouter d'autres extensions si nécessaire)
            if ([".jpg", ".jpeg", ".png", ".webp", ".heic"].includes(ext)) {
                const filePath = path.join(directory, file);
                reduceImageQuality(filePath, quality);
            }
        });
    });
};

// Appel de la fonction pour traiter toutes les images dans le répertoire
const directoryPath =
    "/Users/florianelefebvre/Desktop/remy-portfolio/public/images/artpieces";
processImagesInDirectory(directoryPath, 30); // Réduit la qualité à 30%
