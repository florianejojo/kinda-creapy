const fs = require("fs");
const path = require("path");

const imagesDirectory = path.join(__dirname, "public/images/artpieces");

function generateImports(directory) {
    const files = fs.readdirSync(directory);

    const imageFiles = files.filter((file) => path.extname(file) === ".webp");

    const imports = imageFiles
        .map((file, index) => {
            const variableName = `img${index + 1}`;
            const importPath = `./public/images/artpieces/${file}`;
            return `import ${variableName} from "${importPath}";`;
        })
        .join("\n");

    // Créer le mapping des images
    const mappings = imageFiles
        .map((file, index) => {
            const variableName = `img${index + 1}`;
            return `"${file}": ${variableName},`;
        })
        .join("\n    ");

    const output = `${imports}

const imageMap = {
    ${mappings}
};

export default imageMap;
`;

    fs.writeFileSync(path.join(__dirname, "imageImports.js"), output);

    console.log("Image imports and mappings generated successfully!");
}

generateImports(imagesDirectory);
