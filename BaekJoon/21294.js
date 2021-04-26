// https://www.acmicpc.net/problem/21294
// 와 쿼리

// const [N, ...input] = require("fs").readFileSync("/dev/stdin").toString().split("\n");
// const [N, ...input] = "2\n1\n1\n".split("\n");
const [N, ...input] = "4\n1\n2\n2\n1\n".split("\n");
let answer = 0;

for (let i = 0; i < N; i++) {
  if (input[i] === "2") answer++;
}

if (answer) console.log("\n".repeat(answer - 1));
