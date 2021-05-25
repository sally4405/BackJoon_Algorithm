// https://leetcode.com/problems/evaluate-reverse-polish-notation/
// Evaluate Reverse Polish Notation

var evalRPN = function (tokens) {
  const stack = [];
  tokens.map((n) => {
    if (Number.isInteger(parseInt(n))) stack.push(n);
    else {
      const a = stack.pop();
      const b = stack.pop();
      const result = eval(b + n + "(" + a + ")");
      stack.push(result > 0 ? Math.floor(result) : Math.ceil(result));
    }
  });
  return stack.pop();
};

// const tokens = ["2", "1", "+", "3", "*"];
// const tokens = ["4", "13", "5", "/", "+"];
// const tokens = ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"];
const tokens = ["4", "-2", "/", "2", "-3", "-", "-"];

console.log(evalRPN(tokens));
