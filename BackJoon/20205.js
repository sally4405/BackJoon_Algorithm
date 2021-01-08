// https://www.acmicpc.net/problem/20205
// 교수님 그림이 깨지는데요?

// const [input, ...arr] = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const [input, ...arr] = "3 3\n1 0 1\n0 0 0\n1 0 1\n".split("\n");

const [N, K] = input.split(" ");
const answer = [];

for (let i = 0; i < N; i++) {
  const line = [];
  const target = arr[i].split(" ");
  for (let j = 0; j < N; j++) {
    for (let k = 0; k < K; k++) {
      line.push(target[j]);
    }
  }
  for (let k = 0; k < K; k++) {
    answer.push(line.join(" "));
  }
}

console.log(answer.join("\n"));
