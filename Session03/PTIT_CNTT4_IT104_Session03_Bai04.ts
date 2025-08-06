let input1: number = 2;
let input2: string = "2";
console.log(input1 == input2); // So sánh lỏng
console.log(input1 === input2); // So sánh chặt chẽ

// Lỗi: This comparison appears to be unintentional because the types 'number' and 'string' have no overlap.
// Ở javascript thì có thể ép kiểu input2 từ "2" về 2 khi so sánh lỏng lẻo "==", ra kết quả là true 
// nhưng ở typescript sẽ báo lỗi luôn ở cả 2 trường hợp vì không thể so sánh 2 biến có kiểu dữ liệu khác nhau