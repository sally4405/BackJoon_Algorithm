// https://leetcode.com/problems/palindrome-number/

var isPalindrome = function (x) {
  if (x < 0) return false;
  const splitted = x.toString().split("");

  if (
    splitted.slice(0, Math.floor(splitted.length / 2)).join("") ===
    splitted
      .slice(Math.ceil(splitted.length / 2))
      .reverse()
      .join("")
  )
    return true;
  return false;
};

const x = 1001;

console.log(isPalindrome(x));
