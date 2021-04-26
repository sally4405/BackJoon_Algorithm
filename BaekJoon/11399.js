// https://www.acmicpc.net/problem/11399
// ATM

// const [N, input] = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const [N, input] = "5\n3 1 4 3 2\n".split("\n");

const answer = input
  .split(" ")
  .sort((a, b) => a - b)
  .reduce((acc, cur, i) => acc + cur * (N - i), 0);

console.log(answer);
