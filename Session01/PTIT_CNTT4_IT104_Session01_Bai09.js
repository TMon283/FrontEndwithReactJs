function mergeSort(arr1, arr2) {
    let mergeArr = [...arr1, ...arr2];
    return mergeArr.sort((a, b)=>(a - b));
}

let arr1 = [1, 2, 5, 3, 9];
let arr2 = [4, 8, 7, 6];
console.log(mergeSort(arr1, arr2));
