// https://leetcode.com/problems/replace-all-digits-with-characters/
// Replace All Digits with Characters

var replaceDigits = function (s) {
  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  let answer = "";

  for (let i = 0; i < s.length; i++) {
    if (!s[i + 1]) {
      answer += s[i];
      break;
    }
    answer += s[i] + alphabet[alphabet.indexOf(s[i]) + parseInt(s[++i])];
  }

  return answer;
};

// const s = "a1c1e1";
// // Output: "abcdef"

const s = "a1b2c3d4e";
// Output: "abbdcfdhe"

console.log(replaceDigits(s));
