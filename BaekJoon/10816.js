// https://www.acmicpc.net/problem/10816
// 숫자 카드 2

// const [N, sang, M, target] = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const [N, sang, M, target] = "10\n6 3 2 10 10 10 -10 -10 7 3\n8\n10 9 -5 2 3 4 5 -10\n".split("\n");

const sangCard = sang.split(" ").map((n) => parseInt(n));
const targetCard = target.split(" ").map((n) => parseInt(n));

const sangSorted = [];
const result = [];

for (let n = 0; n < N; n++) {
  if (sangSorted[sangCard[n]]) sangSorted[sangCard[n]]++;
  else sangSorted[sangCard[n]] = 1;
}

for (let m = 0; m < M; m++) {
  result[m] = sangSorted[targetCard[m]] ? sangSorted[targetCard[m]] : 0;
}

console.log(result.join(" "));
