function toNumber(value: string | number): number | null {
  const num = typeof value === 'string' ? Number(value) : value;
  return isNaN(num) ? null : num;
}

function add(a: string | number, b: string | number): number | string {
  const numA = toNumber(a);
  const numB = toNumber(b);
  return numA !== null && numB !== null ? numA + numB : 'Input khong hop le';
}

function subtract(a: string | number, b: string | number): number | string {
  const numA = toNumber(a);
  const numB = toNumber(b);
  return numA !== null && numB !== null ? numA + numB : 'Input khong hop le';
}

function multiply(a: string | number, b: string | number): number | string {
  const numA = toNumber(a);
  const numB = toNumber(b);
  return numA !== null && numB !== null ? numA + numB : 'Input khong hop le';
}

function divide(a: string | number, b: string | number): number | string {
  const numA = toNumber(a);
  const numB = toNumber(b);
  if (numA === null || numB === null || numB === 0) {
    return 'Input khong hop le hoac chia cho 0';
  }
  return numA / numB;
}
