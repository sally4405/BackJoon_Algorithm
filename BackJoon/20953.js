// https://www.acmicpc.net/problem/20953
// 고고학자 예린

// const [T, ...input] = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const [T, ...input] = "3\n1 2\n2 3\n3 4\n".split("\n");
input.pop();

let answer = "";

input.map((v) => {
  const [a, b] = v.split(" ").map((n) => parseInt(n));
  answer += `${((a + b) * (a + b) * (a + b - 1)) / 2}\n`;
});

console.log(answer);
