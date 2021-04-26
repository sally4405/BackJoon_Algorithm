// https://www.acmicpc.net/problem/20299
// 3대 측정

// const [input, ...arr] = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const [input, ...arr] = "5 5000 1600\n1621 1928 1809\n2300 2300 1499\n1805 1211 1699\n1600 1700 1800\n1792 1617 1830\n".split("\n");

const [N, K, L] = input.split(" ").map((n) => parseInt(n));
const result = arr
  .map((n) => n.split(" ").map((m) => parseInt(m)))
  .filter((v) => v[0] + v[1] + v[2] >= K && v[0] >= L && v[1] >= L && v[2] >= L)
  .map((n) => n.join(" "));

console.log(result.length);
console.log(result.join(" "));
