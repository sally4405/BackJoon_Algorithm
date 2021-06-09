// https://leetcode.com/problems/split-a-string-in-balanced-strings/
// Split a String in Balanced Strings

var balancedStringSplit = function (s) {
  let answer = 0;

  const count = { R: 0, L: 0 };

  for (let i = 0; i < s.length; i++) {
    count[s[i]]++;
    if (count.R === count.L) {
      answer++;
      count.R = 0;
      count.L = 0;
    }
  }

  return answer;
};

// const s = "RLRRLLRLRL";
// const s = "RLLLLRRRLR";
// const s = "LLLLRRRR";
const s = "RLRRRLLRLL";

console.log(balancedStringSplit(s));
