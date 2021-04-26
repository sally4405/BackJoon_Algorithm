// https://www.acmicpc.net/problem/11720
// 숫자의 합

// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const input = "11\n10987654321\n".split("\n");

console.log(
  input[1]
    .split("")
    .map((n) => parseInt(n))
    .reduce((acc, cur) => acc + cur, 0)
);
