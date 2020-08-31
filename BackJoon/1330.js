// https://www.acmicpc.net/problem/1330
// 두 수 비교하기

// const input = require("fs").readFileSync("/dev/stdin").toString().split(' ').map(n => parseInt(n));
const input = [1, 2];
const a = input[0];
const b = input[1];

console.log(a === b ? "==" : a > b ? ">" : "<");
