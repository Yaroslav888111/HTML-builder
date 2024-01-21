const fs = require("fs");
const path = require("path");
const absoluteFrom = path.resolve(__dirname, "files");
const absoluteTo = path.resolve(__dirname, "files-copy");
const files = fs.readdirSync(absoluteFrom);

for (const file of files) {
    fs.copyFile(`${absoluteFrom}/${file}`, `${absoluteTo}/${file}`, (err) => {console.log(err)});
}
