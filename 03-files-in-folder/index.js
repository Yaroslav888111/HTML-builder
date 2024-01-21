const fs = require("fs");
const path = require("path");
const absolutePath = path.resolve(__dirname, "secret-folder");
const files = fs.readdirSync(absolutePath);
for ( const file of files ) {
    const fileConf = fs.statSync(`${absolutePath}/${file}`);
    if ( fileConf.isFile() ) {
        const extN = path.extname(`${absolutePath}/${file}`);
        const size = fileConf.size / 1024;
        console.log(`${file} - ${extN} - ${size.toFixed(3)}kb`);
    }
}