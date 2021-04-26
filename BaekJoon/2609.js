// https://www.acmicpc.net/problem/2609
// 최대공약수와 최소공배수

// const input = require("fs").readFileSync("/dev/stdin").toString().split(" ").map((n) => parseInt(n));
const input = "24 18".split(" ").map((n) => parseInt(n));
const large = Math.max(...input);
const small = Math.min(...input);

const loop = (large, small) => {
  if (!small) return large;
  else return loop(small, large % small);
};

const gcd = loop(large, small);

console.log(gcd);
console.log((large * small) / gcd);
