const fs = require("fs");
const path = require("path");
const readline = require("node:readline");

const { stdin: input, stdout: output } = require("node:process");
const rl = readline.createInterface({input, output});
var inputText = fs.createWriteStream(path.join(__dirname, "text.txt"));
rl.on("line", (input) => {
    if ( input === "exit" ) {
        console.log("Goodbye!");
        rl.close();
    } else {
        inputText.write(`${input}\n`);
    }
});
rl.on("SIGINT", () => {
    console.log("Goodbye man!");
    rl.close;
});