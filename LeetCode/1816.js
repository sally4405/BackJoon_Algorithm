// https://leetcode.com/problems/truncate-sentence/
// Truncate Sentence

var truncateSentence = function (s, k) {
  return s.split(" ").slice(0, k).join(" ");
};

// const s = "Hello how are you Contestant";
// const k = 4;
// // Output: "Hello how are you"

const s = "What is the solution to this problem";
const k = 4;
// Output: "What is the solution"

// const s = "chopper is not a tanuki";
// const k = 5;
// // Output: "chopper is not a tanuki"

console.log(truncateSentence(s, k));
