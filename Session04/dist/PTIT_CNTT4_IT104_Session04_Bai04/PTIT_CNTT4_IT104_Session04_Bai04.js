let input;
function checkInput(input) {
    if (typeof input === "string") {
        console.log(`${input.length} kí tự`);
    }
    else if (typeof input === "number") {
        if (input % 2 == 0) {
            console.log("Đây là số chẵn");
        }
        else {
            console.log("Đây là số lẻ");
        }
    }
}
checkInput("demo123");
checkInput(5);
checkInput("123");
checkInput(8);
