const fs = require("fs");
const files = fs.readdirSync("/HTML-builder/03-files-in-folder/secret-foldersecret-folder");
for ( const file of files ) {
    const nameFile = fs.statSync(`/HTML-builder/03-files-in-folder/secret-folder/${file}`);
    if ( nameFile.isFile() ) {
        const extN = path.extname(`${nameFile}`);
        const size = nameFile.size / 1024;
        console.log(`${file} - ${extN} - ${size.toFixed(3)}kb`);
    }
}