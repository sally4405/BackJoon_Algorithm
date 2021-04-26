// https://www.acmicpc.net/problem/4153
// 직각삼각형

// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const input = "6 8 10\n25 52 60\n5 12 13\n0 0 0\n".split("\n");
let result = "";

while (true) {
  const target = input
    .shift()
    .split(" ")
    .map((n) => parseInt(n))
    .sort((a, b) => a - b);
  if (!target[0]) break;
  result += Math.pow(target[2], 2) === Math.pow(target[0], 2) + Math.pow(target[1], 2) ? "right\n" : "wrong\n";
}

console.log(result);
