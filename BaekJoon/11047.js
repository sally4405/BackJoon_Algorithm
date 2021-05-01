// https://www.acmicpc.net/problem/11047
// 동전 0

// const [NK, ...input] = require("fs").readFileSync("/dev/stdin").toString().split("\n");
// const [NK, ...input] = "10 4200\n1\n5\n10\n50\n100\n500\n1000\n5000\n10000\n50000\n".split("\n");
// const [NK, ...input] = "10 4790\n1\n5\n10\n50\n100\n500\n1000\n5000\n10000\n50000\n".split("\n");
const [NK, ...input] = "1 1\n1\n".split("\n");

let [N, K] = NK.split(" ").map((n) => parseInt(n));
let answer = 0;

input.pop();

for (let i = N - 1; i >= 0; i--) {
  let target = parseInt(input[i]);
  answer += Math.floor(K / target);
  K %= target;
  if (!K) break;
}

console.log(answer);
