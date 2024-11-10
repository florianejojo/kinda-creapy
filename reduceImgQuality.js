const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");

const reduceImageQuality = (inputPath, quality = 100) => {
    const command = `magick "${inputPath}" -resize 600x600 -quality ${quality} "${inputPath}" `;

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

const processImagesInDirectory = (directory, quality) => {
    fs.readdir(directory, (err, files) => {
        if (err) {
            console.error("Erreur lors de la lecture du répertoire:", err);
            return;
        }

        files.forEach((file) => {
            const ext = path.extname(file).toLowerCase();

            if ([".jpg", ".jpeg", ".png", ".webp", ".heic"].includes(ext)) {
                const filePath = path.join(directory, file);
                reduceImageQuality(filePath, quality);
            }
        });
    });
};

const directoryPath =
    "/Users/florianelefebvre/Desktop/remy-portfolio/public/images/artpieces";
processImagesInDirectory(directoryPath); 
