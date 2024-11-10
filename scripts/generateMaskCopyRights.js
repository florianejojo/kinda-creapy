const { exec } = require("child_process");
const path = require("path");
const fs = require("fs");

function applyWatermark(imagePath) {
    const label = "© KINDA CREAPY ©";
    const command = `magick "${imagePath}" \
    -gravity southeast -pointsize 20 -font Arial -fill "rgba(255, 255, 255, 0.7)" -annotate 90x90+35+14 "${label}"\
    -gravity northwest -pointsize 20 -font Arial -fill "rgba(165, 42, 42, 0.7)" -annotate 90x90+35+14 "${label}" \
    "${imagePath}"`;

    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error whilea dding watermark : ${error.message}`);
            return;
        }
        console.log(`Watermark added to image : ${imagePath}`);
    });
}

function isImageFile(filePath) {
    const ext = path.extname(filePath).toLowerCase();
    return [".jpg", ".jpeg", ".png", ".webp", ".heic"].includes(ext);
}

const generateMaskCopyRights = (directory) => {
    fs.readdir(directory, (err, files) => {
        if (err) {
            console.error("Erro while reading file system:", err);
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

const directoryPath = `${
    __dirname.split("/remy-portfolio/scripts")[0]
}/remy-portfolio/public/images/artpieces`;

generateMaskCopyRights(directoryPath);
