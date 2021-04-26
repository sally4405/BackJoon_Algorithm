// https://www.acmicpc.net/problem/1546
// 평균

// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const input = "5\n1 2 4 8 16\n".split("\n");

const N = parseInt(input.shift());
const numList = input
  .shift()
  .split(" ")
  .map((n) => parseInt(n));

const max = Math.max(...numList);
const sum = numList.reduce((acc, cur) => acc + cur, 0);

console.log((sum * 100) / (max * N));
