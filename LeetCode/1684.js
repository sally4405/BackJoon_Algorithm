// https://leetcode.com/problems/count-the-number-of-consistent-strings/
// Count the Number of Consistent Strings

var countConsistentStrings = function (allowed, words) {
  const allowedList = allowed.split("");
  return words.filter((str) => {
    for (let i = 0; i < str.length; i++) {
      if (!allowedList.includes(str[i])) return false;
    }
    return true;
  }).length;
};

// const allowed = "ab";
// const words = ["ad", "bd", "aaab", "baa", "badab"];
// // Output: 2

// const allowed = "abc";
// const words = ["a", "b", "c", "ab", "ac", "bc", "abc"];
// // Output: 7

const allowed = "cad";
const words = ["cc", "acd", "b", "ba", "bac", "bad", "ac", "d"];
// Output: 4

console.log(countConsistentStrings(allowed, words));
