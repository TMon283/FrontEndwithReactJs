function sum(array) {
    let total = 0;
    for (const num of array) {
        if (num % 2 == 0) {
            total += num;
        }
    }
    return total;
}

const arr = [1, 2, 3, 4, 5, 6];
console.log(sum(arr));
