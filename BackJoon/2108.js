// https://www.acmicpc.net/problem/2108
// 통계학

// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n").map((n) => parseInt(n));
const input = "5\n1\n3\n8\n-2\n2\n"
  .toString()
  .split("\n")
  .map((n) => parseInt(n));

const N = input.shift();
input.pop();
input.sort((a, b) => a - b);

let sum = 0;
let most = [];
const min = input[0];

input.map((n) => {
  sum += n;
  if (most[n - min]) most[n - min]++;
  else most[n - min] = 1;
});

const mm = Math.max(...most.filter((v) => v));
const freq = most
  .map((v, i) => {
    if (v === mm) return i + min;
  })
  .filter((v) => v);

console.log(Math.round(sum / N));
console.log(input[Math.floor(N / 2)]);
console.log(freq.length === 1 ? freq[0] : freq[1]);
console.log(input[N - 1] - input[0]);
