const a = 5;
const b = [1, 2, 3];
a = 10;
b[2] = 8;
b.push(4);
console.log(a); // không thể thay đổi giá trị của biến số nguyên a khi khai báo bằng const
console.log(b); // mảng b có thể thay đổi, thêm giá trị mới khi khai báo bằng const

