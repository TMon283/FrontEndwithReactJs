function findLongestWord<T extends string>(sentence: T): T {
  const words = sentence.split(" ");
  let longest = "";

  for (const word of words) {
    const uniqueChars = new Set(word);
    if (uniqueChars.size === word.length && word.length > longest.length) {
      longest = word;
    }
  }

  return longest as T;
}

const input = "hello world apple banana orange pumpkin cucumber";
console.log(findLongestWord(input));