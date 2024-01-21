const { stdin, stdout } = process;
stdout.write("Write a text");
stdin.on("data", (data) => {
    stdout.write("You write, ");
    stdout.write(data);
    process.exit();
});
process.on("exit", () => stdout.write("Bye-bye!"));