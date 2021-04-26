// https://www.acmicpc.net/problem/1712
// 손익분기점

// const [A, B, C] = require("fs").readFileSync("/dev/stdin").toString().split(" ").map(n => parseInt(n));
const [A, B, C] = "1000 170 70\n".split(" ").map((n) => parseInt(n));
// const [A, B, C] = "595 38 57\n".split(" ").map((n) => parseInt(n));
// const [A, B, C] = "328 409 450\n".split(" ").map((n) => parseInt(n));

if (B >= C) return console.log(-1);
console.log(Math.floor(A / (C - B)) + 1);
