function flatten(arr) {
    const result = [];
    for (const subArr of arr) {
        result.push(...subArr);
    }
    return result;
}
console.log(flatten([[1, 2], [3, 4], [5, 6]]));
console.log(flatten([['apple', 'banana'], ['cherry'], ['date', 'blueberry']]));
