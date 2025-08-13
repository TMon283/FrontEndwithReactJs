function findLongestWord(sentence) {
    const words = sentence.split(" ");
    let longest = "";
    for (const word of words) {
        const uniqueChars = new Set(word);
        if (uniqueChars.size === word.length && word.length > longest.length) {
            longest = word;
        }
    }
    return longest;
}
const input = "hello world apple banana orange pumpkin cucumber";
console.log(findLongestWord(input));
