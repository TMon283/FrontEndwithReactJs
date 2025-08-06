var num1 = 12;
var num2 = 2;
var num3;
var num4 = "10";
var num5 = true;
num3 = num1 + num2;
console.log(num3);
num3 = num1 - num2;
console.log(num3);
num3 = num1 * num2;
console.log(num3);
num3 = num1 / num2;
console.log(num3);
var result = num4 + num5;
console.log(result);
// JS: ép kiểu tự động true -> "true" -> output: "10true"
// TS: báo lỗi vì không thể cộng string với boolean
