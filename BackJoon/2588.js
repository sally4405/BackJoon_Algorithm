// https://www.acmicpc.net/problem/2588
// 곱셈

// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n").map((n) => parseInt(n));
const input = "472\n385\n".split("\n");

const a = parseInt(input[0]);
const b = input[1].split("").map((n) => parseInt(n));

console.log(a * b[2]);
console.log(a * b[1]);
console.log(a * b[0]);
console.log(a * parseInt(b.join("")));
