const numbers: number[] = [];
for (let i = 0; i < 10; i++) {
    const element = prompt("Input number:");
    numbers.push(Number(element));
}

function findAvg(numbers: number[]) {
    let sum = 0;
    for (const num of numbers) {
        sum += num;
    }
    return sum / numbers.length;
}

const result = findAvg(numbers);
console.log("Avg of array:", result.toFixed(2));
