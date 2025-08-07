function processInput(input: string | number | boolean): void {
    if (typeof input === "string") {
        if (/^\d+$/.test(input)) {
            const num = Number(input);
            console.log(num ** 2);
        } else {
            const letterCount = (input.match(/[a-zA-Z]/g) || []).length;
            console.log(`${letterCount} ký tự chữ cái`);
        }
    } else if (typeof input === "number") {
        const isPrime = (n: number): boolean => {
            if (n < 2) return false;
            for (let i = 2; i <= Math.sqrt(n); i++) {
                if (n % i === 0) return false;
            }
            return true;
        };
        if (isPrime(input)) {
            console.log("Là số nguyên tố");
        } else {
            console.log("Không phải số nguyên tố");
        }
    } else if (typeof input === "boolean") {
        if (input === true) {
            console.log("Giá trị là true - tiến hành xử lý");
        } else {
            console.log("Giá trị là false - dừng xử lý");
        }
    }
}

processInput("123");
processInput("hello123!!!");
processInput(13);
processInput(15);
processInput(true);
processInput(false);

