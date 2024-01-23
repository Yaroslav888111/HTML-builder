const fs = require("fs");
const readStream = fs.createReadStream("01-read-file/text.txt", { encoding: "utf-8"});
readStream.on("data", (data) => {
    process.stdout.write(data);
});
readStream.on("error", (error) => {
    console.error("file reading error:", error);
});
readStream.on("end", () => {
    console.log("file reading complete");
});