// https://www.acmicpc.net/problem/21313
// 문어

// const N = require("fs").readFileSync("/dev/stdin").toString();
const N = "7\n";

console.log("1 2 ".repeat(Math.floor(N / 2)) + (N % 2 ? "3" : ""));
