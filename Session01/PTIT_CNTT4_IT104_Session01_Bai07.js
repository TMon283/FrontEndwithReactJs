function sumArr(...array) {
    return array.map(arr => arr.reduce((sum, num)=>sum + num, 0));
}

const input = sumArr([1, 2], [6, 7, 8], [12, 8]);
console.log(input);
