function _flatten<T>(arr: T[]): T[] {
    const result: T[] = [];
    for (const element of arr) {
        if (Array.isArray(element)) {
            result.push(..._flatten<T>(element));
        } else {
            result.push(element);
        }
    }
    return result;
}

console.log(_flatten([1, [2, [3, 4], 5], 6, 7]));

