// https://leetcode.com/problems/check-if-the-sentence-is-pangram/
// Check if the Sentence Is Pangram

var checkIfPangram = function (sentence) {
  return new Set(sentence.split("")).size === 26;
};

const sentence = "thequickbrownfoxjumpsoverthelazydog";
// const sentence = "leetcode";

console.log(checkIfPangram(sentence));
