// https://www.acmicpc.net/problem/2475
// 검증수

// const input = require("fs").readFileSync("/dev/stdin").toString().split(" ").map((n) => Math.pow(parseInt(n), 2)).reduce((acc, cur) => acc + cur, 0);
const input = "0 4 2 5 6"
  .split(" ")
  .map((n) => Math.pow(parseInt(n), 2))
  .reduce((acc, cur) => acc + cur, 0);

console.log(input % 10);
