// https://www.acmicpc.net/problem/2805
// 나무 자르기

// const [[N, M], tree]  = require("fs").readFileSync("/dev/stdin").toString().split("\n").map((n) => n.split(" ").map((m) => parseInt(m)));
const [[N, M], tree] = "4 8\n20 15 10 17\n".split("\n").map((n) => n.split(" ").map((m) => parseInt(m)));
// const [[N, M], tree] = "4 1000000000\n1000000000 1000000000 1000000000 0\n".split("\n").map((n) => n.split(" ").map((m) => parseInt(m)));

let min = tree[0];
let max = tree[0];
for (let i = 1; i < tree.length; i++) {
  min = min < tree[i] ? min : tree[i];
  max = max > tree[i] ? max : tree[i];
}

let result = tree.reduce((acc, cur) => acc + cur, 0) - N * min;
if (result <= M) return console.log(min - Math.ceil((M - result) / N));

let low = min;
let high = max;
let mid = Math.floor((low + high) / 2);

while (low <= high) {
  mid = Math.floor((low + high) / 2);
  result = tree.map((n) => (n - mid >= 0 ? n - mid : 0)).reduce((acc, cur) => acc + cur, 0);

  if (result === M) return console.log(mid);
  if (result < M) high = mid - 1;
  else low = mid + 1;
}

console.log(result < M ? mid - 1 : mid);
