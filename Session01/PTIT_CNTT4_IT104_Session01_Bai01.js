for (let i = 0; i < 5; i++) {
    console.log(i);
}
console.log(i); // Undefined vì biến i được khai báo trong for có phạm vi block, không thể truy cập bên ngoài vòng lặp
