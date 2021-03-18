// https://www.acmicpc.net/problem/12865
// 평범한 배낭

// const [input, ...list] = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const [input, ...array] = "4 7\n6 13\n4 8\n3 6\n5 12\n".split("\n");
const [N, K] = input.split(" ");
array.pop();
const list = array.map((n) => n.split(" ").map((v) => parseInt(v)));
let answer = 0;

for (let i = 0; i < N; i++) {
  const a = dp(i, 0, 0);
  console.log(a);
}

const dp = (index, weight, value) => {
  weight += list[i][0];
  value += list[i][1];
  if (weight > K) return value;

  for (let i = index + 1; i < N; i++) {
    dp();
  }
};

console.log(answer);
