// https://www.acmicpc.net/problem/15552
// 빠른 A+B

// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const input = "5\n1 1\n12 34\n5 500\n40 60\n1000 1000\n".split("\n");

let answer = "";

for (let i = 1; i < input.length - 1; i++) {
  answer += input[i].split(" ").reduce((acc, cur) => acc + parseInt(cur), 0) + "\n";
}

console.log(answer);
