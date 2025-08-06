function isUnique(word) {
    var charSet = new Set();
    for (var _i = 0, word_1 = word; _i < word_1.length; _i++) {
        var char = word_1[_i];
        if (charSet.has(char))
            return false;
        charSet.add(char);
    }
    return true;
}
function findLongestWord(input) {
    var words = input.split(" ");
    var longest = "";
    for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
        var word = words_1[_i];
        if (isUnique(word) && word.length > longest.length) {
            longest = word;
        }
    }
    return longest;
}
var input = "hello world chicken banana monkey";
console.log(findLongestWord(input));
