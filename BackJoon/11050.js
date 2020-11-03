// https://www.acmicpc.net/problem/11050
// 이항 계수 1

// const [N, K] = require("fs").readFileSync("/dev/stdin").toString().split(" ").map((n) => parseInt(n));
const [N, K] = "5 2\n".split(" ").map((n) => parseInt(n));

const factorial = (n) => {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
};

console.log(factorial(N) / (factorial(K) * factorial(N - K)));
