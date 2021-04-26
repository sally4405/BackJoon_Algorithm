// https://www.acmicpc.net/problem/2108
// 통계학

// [참고](https://dpsc615.tistory.com/132)

// const [N, ...input] = require("fs").readFileSync("/dev/stdin").toString().split("\n").map((n) => parseInt(n));
const [N, ...input] = "5\n1\n3\n8\n-2\n2\n".split("\n").map((n) => parseInt(n));
// const [N, ...input] = "5\n-1\n-2\n-3\n-1\n-2\n".split("\n").map((n) => parseInt(n));
// const [N, ...input] = "1\n-1\n".split("\n").map((n) => parseInt(n));

input.pop();
input.sort((a, b) => a - b);

let sum = 0;
let most = {};
const min = input[0];

input.map((n) => {
  sum += n;
  if (most[n]) most[n]++;
  else most[n] = 1;
});

const mm = Math.max.apply(null, Object.values(most));

const freq = [];
for (let key in most) {
  if (most[key] === mm) {
    freq.push(key);
  }
}
freq.sort((a, b) => a - b);

console.log(Math.round(sum / N));
console.log(input[Math.floor(N / 2)]);
console.log(freq.length === 1 ? freq[0] : freq[1]);
console.log(input[N - 1] - input[0]);
