// https://www.acmicpc.net/problem/21760
// 야구 시즌

// const [T, ...input] = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const [T, ...input] = "3\n2 3 3 60\n2 2 1 18\n2 2 1 4\n".split("\n");

let answer = "";

for (let i = 0; i < T; i++) {
  const [N, M, k, D] = input[i].split(" ");
  const games = (N * M * (k * (M - 1) + M * (N - 1))) / 2;
  let result = games * Math.floor(D / games);

  answer += result ? `${result}\n` : "-1\n";
}

console.log(answer);
