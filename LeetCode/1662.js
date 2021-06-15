// https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/
// Check If Two String Arrays are Equivalent

var arrayStringsAreEqual = function (word1, word2) {
  return word1.join("") === word2.join("");
};

const word1 = ["ab", "c"];
const word2 = ["a", "bc"];

// const word1 = ["a", "cb"];
// const word2 = ["ab", "c"];

// const word1 = ["abc", "d", "defg"];
// const word2 = ["abcddefg"];

console.log(arrayStringsAreEqual(word1, word2));
