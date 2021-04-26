// https://www.acmicpc.net/problem/10869
// 사칙연산

// const input = require("fs").readFileSync("/dev/stdin").toString().split(" ").map((n) => parseInt(n));
const input = "7 3".split(" ").map((n) => parseInt(n));

const a = input[0];
const b = input[1];

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(Math.floor(a / b));
console.log(a % b);
