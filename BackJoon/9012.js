// https://www.acmicpc.net/problem/9012
// 괄호

// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
// const input = "6\n(())())\n(((()())()\n(()())((()))\n((()()(()))(((())))()\n()()()()(()()())()\n(()((())()(\n".split("\n");
const input = "3\n((\n))\n())(()\n".split("\n");

let n = parseInt(input.shift());
let result = "";

while (n) {
  n--;
  let target = input.shift();
  let left = 0;
  let bool = true;

  for (let i = 0; i < target.length; i++) {
    switch (target[i]) {
      case "(":
        left++;
        break;
      case ")":
        left--;
        break;
      default:
        break;
    }
    if (left < 0) {
      bool = false;
      break;
    }
  }

  result += bool && !left ? "YES\n" : "NO\n";
}

console.log(result);
