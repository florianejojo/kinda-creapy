const fs = require("fs");
const path = require("path");

const imagesDirectory = path.join(__dirname, "public/images/artpieces");

function generateImports(directory) {
    const files = fs.readdirSync(directory);

    // const imageFiles = files.filter((file) => path.extname(file) === ".webp");

    const imports = files
        .map((file, index) => {
            const variableName = `img${index + 1}`;
            const importPath = `./public/images/artpieces/${file}`;
            return `import ${variableName} from "${importPath}";`;
        })
        .join("\n");

    // Créer le mapping des images
    const mappings = files
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
}

generateImports(imagesDirectory);
