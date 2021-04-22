// https://www.acmicpc.net/problem/21567
// 숫자의 개수 2

// const [A,B,C] = require("fs").readFileSync("/dev/stdin").toString().split("\n").map((n) => Number(n));
const [A, B, C] = "150\n266\n427\n".split("\n").map((n) => Number(n));
// const [A, B, C] = "999999\n999999\n999999\n".split("\n").map((n) => Number(n));
const answer = Array.from({ length: 10 }, (v) => 0);

(BigInt(A) * BigInt(B) * BigInt(C))
  .toString()
  .split("")
  .map((n) => answer[Number(n)]++);

console.log(answer.join("\n"));
