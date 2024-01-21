const fs = require("fs");
const readStream = fs.createReadStream("text.txt", { encoding: "utf-8"});
readStream.on("data", (data) => {
    process.stdout.write(data);
});
readStream.on("error", (error) => {
    console.error("file reading error:", error);
});
readStream.on("end", () => {
    console.log("file reading complete");
});