// https://www.acmicpc.net/problem/1001
// A-B

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map((n) => parseInt(n));
var a = input[0];
var b = input[1];
console.log(a - b);
