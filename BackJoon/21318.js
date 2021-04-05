// https://www.acmicpc.net/problem/21318
// 피아노 체조

// const [N, difficulty, Q, ...input] = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const [N, difficulty, Q, ...input] = "9\n1 2 3 3 4 1 10 8 1\n5\n1 3\n2 5\n4 7\n9 9\n5 9\n".split("\n");
// const [N, difficulty, Q, ...input] = "6\n573 33283 5572 346 906 567\n5\n5 6\n1 3\n2 2\n1 6\n3 6\n".split("\n");

const diff = difficulty.split(" ").map((n) => parseInt(n));
const miss = [];
let sum = 0;
let answer = "";

for (let i = 0; i < N; i++) {
  if (diff[i] > diff[i + 1]) sum++;
  miss.push(sum);
}

for (let i = 0; i < Q; i++) {
  const [x, y] = input[i].split(" ").map((n) => parseInt(n));
  answer += `${miss[y - 2] - (miss[x - 2] ? miss[x - 2] : 0)}\n`;
}

console.log(answer);
