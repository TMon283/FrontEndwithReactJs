function toNumber(value: string): number | null {
  const num = Number(value);
  return isNaN(num) ? null : num;
}

function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function multiple(a: number, b: number): number {
  return a * b;
}

function divide(a: number, b: number): number {
  return a / b;
}

function power(a: number, b: number): number {
  return Math.pow(a, b);
}

function sqrt(a: number, b: number): number | string {
  return Math.pow(a, 1/b).toFixed(2);
}

function factorial(a: number): number {
  if (a < 0) return NaN;
  if (a === 0 || a === 1) return 1;
  return a * factorial(a - 1);
}

function operator(op: string): void {
  const input1 = (document.getElementById("input1") as HTMLInputElement).value;
  const input2 = (document.getElementById("input2") as HTMLInputElement).value;
  const a = toNumber(input1);
  const b = toNumber(input2);
  const resultDiv = document.getElementById("result")!;

  let result: number | string;

  switch (op) {
    case "+":
      result = a !== null && b !== null ? add(a, b) : "Loi nhap lieu";
      break;
    case "-":
      result = a !== null && b !== null ? subtract(a, b) : "Loi nhap lieu";
      break;
    case "*":
      result = a !== null && b !== null ? multiple(a, b) : "Loi nhap lieu";
      break;
    case "/":
      result = a !== null && b !== null ? divide(a, b) : "Loi nhap lieu";
      break;
    case "^":
      result = a !== null && b !== null ? power(a, b) : "Loi nhap lieu";
      break;
    case "√":
      result = a !== null && b !== null ? sqrt(a, b) : "Loi nhap lieu";
      break;
    case "!":
      result = a !== null ? factorial(a) : "Loi nhap lieu";
      break;
    default:
      result = "Phep tinh khong duoc ho tro";
  }

  resultDiv.textContent = `Ket qua: ${result}`;
}
