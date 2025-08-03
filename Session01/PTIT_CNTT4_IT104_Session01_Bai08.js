function insertArr(arr1, arr2, position) {
    if (position < 0 || position > arr1.length) {
        console.log("Vị trí không hợp lệ");
        return;
    }
    const result = [...arr1.slice(0, position), ...arr2, ...arr1.slice(position)];
    console.log(result);
}

let arr1 = [1, 2, 3, 7, 8];
let arr2 = [4, 5, 6];
let pos = +prompt("Position:");
insertArr(arr1, arr2, pos);
