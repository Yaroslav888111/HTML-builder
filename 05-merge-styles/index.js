const fs = require("fs");
const path = require("path");
const absoluteFrom = path.resolve(__dirname, "styles");
const absoluteTo = path.resolve(__dirname, "project-dist");
const files = fs.readdirSync(absoluteFrom);
const arr = [];
for (const file of files) {
    const fileConf = fs.statSync(`${absoluteFrom}/${file}`);
    const extN = path.extname(`${absoluteFrom}/${file}`);
    if (fileConf.isFile() && extN === ".css") {
        const fileContent = fs.readFileSync(`${absoluteFrom}/${file}`, "utf-8");
        arr.push(fileContent);
    }
}
const bundleContent = arr.join("");
fs.writeFileSync(`${absoluteTo}/bundle.css`, bundleContent)