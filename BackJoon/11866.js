// https://www.acmicpc.net/problem/11866
// 요세푸스 문제 0

// const [N, K] = require("fs").readFileSync("/dev/stdin").toString().split(" ").map(n => parseInt(n));
const [N, K] = "7 3\n".split(" ").map((n) => parseInt(n));

let numbers = Array.from({ length: N }, (v, i) => i + 1);
let result = [];

let targetIndex = 0;

while (numbers.length) {
  targetIndex = (targetIndex + K - 1) % numbers.length;
  result.push(numbers.splice(targetIndex, 1));
}

console.log("<" + result.join(", ") + ">");
