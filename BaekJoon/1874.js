// https://www.acmicpc.net/problem/1874
// 스택 수열

// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n").map(n => parseInt(n));
const input = "8\n4\n3\n6\n8\n7\n5\n2\n1\n".split("\n").map((n) => parseInt(n));
// const input = "5\n1\n2\n5\n3\n4\n".split("\n").map((n) => parseInt(n));

const n = input.shift();
const stack = [];
let target = input.shift();
let answer = "";
let i = 1;

while (stack.length || i <= n) {
  const lastStack = stack[stack.length - 1];
  if (target >= i) {
    stack.push(i);
    answer += "+\n";
    i++;
  } else if (target === lastStack) {
    stack.pop();
    answer += "-\n";
    target = input.shift();
  } else {
    answer = "NO";
    break;
  }
}

console.log(answer);
