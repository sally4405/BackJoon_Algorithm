// https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/
// Maximum Nesting Depth of the Parentheses

var maxDepth = function (s) {
  let left = 0;
  let max = 0;

  for (let i = 0; i < s.length; i++) {
    const target = s[i];
    if (target === "(") {
      left++;
      continue;
    }
    if (target === ")") {
      if (left > max) max = left;
      left--;
      continue;
    }
    if (left > max) max = left;
  }

  return max;
};

// const s = "(1+(2*3)+((8)/4))+1";
// const s = "(1)+((2))+(((3)))";
// const s = "1+(2*3)/(2-1)";
// const s = "+(+(+)+)+";
const s = "()";

console.log(maxDepth(s));
