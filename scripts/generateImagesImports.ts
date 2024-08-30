const fs = require("fs");
const path = require("path");

export function generateImageImports() {
    const imagesDir = path.resolve("./public/images/ici");
    const destImportsDirectory = path.resolve("./app");

    const files = fs.readdirSync(imagesDir);

    const imageFiles = files.filter(
        (file) =>
            path.extname(file) === ".webp" || path.extname(file) === ".jpeg"
    );
    const imports = imageFiles
        .map((file, index) => {
            const variableName = `img${index + 1}`;
            const importPath = `@/public/images/ici/${file}`;

            return `import ${variableName} from "${importPath}";`;
        })
        .join("\n");

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

    fs.writeFileSync(
        path.join(destImportsDirectory, "imageImports5.js"),
        output
    );

    console.log("Image imports and mappings generated successfully!");
}
