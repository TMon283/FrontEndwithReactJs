function isUnique(word: string): boolean {
  const seen: string[] = [];
  for (const char of word) {
    if (seen.includes(char)) return false;
    seen.push(char);
  }
  return true;
}

function findLongestWord(input: string): string {
  const words = input.split(" ");
  let longest = "";

  for (const word of words) {
    if (isUnique(word) && word.length > longest.length) {
      longest = word;
    }
  }
  return longest;
}
const input = "hello world chicken banana monkey";
console.log(findLongestWord(input)); 