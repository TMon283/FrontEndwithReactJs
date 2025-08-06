let str1 = prompt("Nhập chuỗi bất kì");
let str2 = "";
for (let i = 0; i < str1.length; i++) {
    if (str2.indexOf(str1[i]) === -1) {
        str2 += str1[i];
    }
}
console.log(str2);
