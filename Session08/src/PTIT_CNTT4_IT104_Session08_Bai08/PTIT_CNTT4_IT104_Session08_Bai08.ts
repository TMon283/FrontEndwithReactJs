function partialUpdate<T>(obj: T, updates: Partial<T>): T {
  return {...obj, ...updates};
}

console.log(partialUpdate({ name: 'Alice', age: 30, job: 'Developer' },{ age: 31 }));
console.log(partialUpdate({ name: 'Alice', age: 30, job: 'Developer' },{ name: 'Bob', job: 'Designer' }));
