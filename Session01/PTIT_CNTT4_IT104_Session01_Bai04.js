let number =prompt("Nhập số:");
let input = Number(number);
const isNumber = input => typeof(input) =='number' && !isNaN(input);
if (isNumber(input)) {
    if (input % 2 == 0) {
        console.log(`${input} là số chẵn`);
    } else {
        console.log(`${input} là số lẻ`);
    }
} else {
    console.log(`${input} không phải số`);
}