function toNumber(value) {
    var num = typeof value === 'string' ? Number(value) : value;
    return isNaN(num) ? null : num;
}
function add(a, b) {
    var numA = toNumber(a);
    var numB = toNumber(b);
    return numA !== null && numB !== null ? numA + numB : 'Input khong hop le';
}
function subtract(a, b) {
    var numA = toNumber(a);
    var numB = toNumber(b);
    return numA !== null && numB !== null ? numA + numB : 'Input khong hop le';
}
function multiply(a, b) {
    var numA = toNumber(a);
    var numB = toNumber(b);
    return numA !== null && numB !== null ? numA + numB : 'Input khong hop le';
}
function divide(a, b) {
    var numA = toNumber(a);
    var numB = toNumber(b);
    if (numA === null || numB === null || numB === 0) {
        return 'Input khong hop le hoac chia cho 0';
    }
    return numA / numB;
}
