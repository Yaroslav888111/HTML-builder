const fs = require("fs/promises");
const path = require("path");
const secretPath = path.join(__dirname, "secret-folder");

fs.readdir(secretPath, {withFileTypes: true})
.then((result) => {
    result.forEach((item) => {
        if (item.isFile()) {
            const newPath = path.join(secretPath, item.name);
            const extN = path.extname(newPath);
            const nameF = path.basename(newPath,extN);
            fs.stat(newPath)
            .then((stat) => {
                console.log(
                    `${nameF} - ${extN.slice(1)} - ${(stat.size / 1024).toFixed(3)}kb`,
                );
            });
        }
    });
});

