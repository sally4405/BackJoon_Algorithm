// https://leetcode.com/problems/remove-outermost-parentheses/
// Remove Outermost Parentheses

var removeOuterParentheses = function (s) {
  let cnt = 0;
  let child = "";
  let answer = "";

  for (let i = 0; i < s.length; i++) {
    const target = s[i];
    if (target === "(") {
      cnt++;
      if (cnt > 1) child += target;
      continue;
    }
    cnt--;
    if (!cnt) {
      answer += child;
      child = "";
      continue;
    }
    child += target;
  }

  return answer;
};

// const s = "(()())(())";
// // Output: "()()()"

// const s = "(()())(())(()(()))";
// // Output: "()()()()(())"

const s = "()()";
// Output: ""

console.log(removeOuterParentheses(s));
