// https://www.acmicpc.net/problem/2908
// 상수

// const input = require("fs").readFileSync("/dev/stdin").toString().split("");
const input = "734 893\n".split("");

const a = input[2] + input[1] + input[0];
const b = input[6] + input[5] + input[4];

console.log(parseInt(a) > parseInt(b) ? a : b);
