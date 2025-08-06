let num1: number = 12;
let num2: number = 2;
let num3: number;
let num4: string = "10";
let num5: boolean = true;

num3 = num1 + num2;
console.log(num3);
num3 = num1 - num2;
console.log(num3);
num3 = num1 * num2;
console.log(num3);
num3 = num1 / num2;
console.log(num3);

num3 = num4 + num5;
console.log(num3);

// JS: ép kiểu tự động true -> "true" -> output: "10true"
// TS: báo lỗi vì không thể cộng string với boolean