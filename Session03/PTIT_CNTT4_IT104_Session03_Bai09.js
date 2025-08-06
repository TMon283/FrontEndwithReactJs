function toNumber(value) {
    var num = Number(value);
    return isNaN(num) ? null : num;
}
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiple(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}
function power(a, b) {
    return Math.pow(a, b);
}
function sqrt(a, b) {
    return Math.pow(a, 1 / b).toFixed(2);
}
function factorial(a) {
    if (a < 0)
        return NaN;
    if (a === 0 || a === 1)
        return 1;
    return a * factorial(a - 1);
}
function operator(op) {
    var input1 = document.getElementById("input1").value;
    var input2 = document.getElementById("input2").value;
    var a = toNumber(input1);
    var b = toNumber(input2);
    var resultDiv = document.getElementById("result");
    var result;
    switch (op) {
        case "+":
            result = a !== null && b !== null ? add(a, b) : "Loi nhap lieu";
            break;
        case "-":
            result = a !== null && b !== null ? subtract(a, b) : "Loi nhap lieu";
            break;
        case "*":
            result = a !== null && b !== null ? multiple(a, b) : "Loi nhap lieu";
            break;
        case "/":
            result = a !== null && b !== null ? divide(a, b) : "Loi nhap lieu";
            break;
        case "^":
            result = a !== null && b !== null ? power(a, b) : "Loi nhap lieu";
            break;
        case "√":
            result = a !== null && b !== null ? sqrt(a, b) : "Loi nhap lieu";
            break;
        case "!":
            result = a !== null ? factorial(a) : "Loi nhap lieu";
            break;
        default:
            result = "Phep tinh khong duoc ho tro";
    }
    resultDiv.textContent = "Ket qua: ".concat(result);
}
