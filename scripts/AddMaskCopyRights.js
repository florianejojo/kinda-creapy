const { exec } = require("child_process");
const path = require("path");
const fs = require("fs");

// Fonction pour appliquer le watermark
function applyWatermark(imagePath) {
    // const command = `magick "${imagePath}" -gravity southeast -pointsize 30 -fill "rgba(255, 255, 255, 0.7)" -annotate 90x90+30+30 "© KINDA CREAPY" "${imagePath}"`;
    const command = `magick "${imagePath}" \
    -gravity southeast -pointsize 16 -font Arial -fill "rgba(255, 255, 255, 0.7)" -annotate 90x90+30+14 "© KINDA CREAPY ©" \
    -gravity northwest -pointsize 16 -font Arial -fill "rgba(165, 42, 42, 0.7)" -annotate 90x90+30+14 "© KINDA CREAPY ©" \
    "${imagePath}"`;
    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(
                `Erreur lors de l'ajout du watermark : ${error.message}`
            );
            return;
        }
        console.log(`Watermark ajouté à l'image : ${imagePath}`);
    });
}

// Fonction pour vérifier si le fichier est une image
function isImageFile(filePath) {
    const ext = path.extname(filePath).toLowerCase();
    return [".jpg", ".jpeg", ".png", ".webp", ".heic"].includes(ext);
}

// Processus de traitement des images
const processImagesInDirectory = (directory) => {
    fs.readdir(directory, (err, files) => {
        if (err) {
            console.error("Erreur lors de la lecture du répertoire:", err);
            return;
        }

        files.forEach((file) => {
            const filePath = path.join(directory, file);
            if (isImageFile(filePath)) {
                applyWatermark(filePath);
            }
        });
    });
};

const directoryPath =
    "/Users/florianelefebvre/Desktop/remy-portfolio/public/images/artpieces";
processImagesInDirectory(directoryPath);
