function typeConsole(type = "log") {
    if (type === "warn") {
        return console.warn(`Đây là type ${type}`);
    } else if (type === "error") {
        return console.error(`Đây là type ${type}`);
    } else {
        return console.log(`Đây là type ${type}`);
    }
}
typeConsole("log");
typeConsole("warn");
typeConsole("error");
typeConsole();