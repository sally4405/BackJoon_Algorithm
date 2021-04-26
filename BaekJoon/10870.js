// https://www.acmicpc.net/problem/10870
// 피보나치 수 5

// const input = parseInt(require("fs").readFileSync("/dev/stdin").toString());
const input = parseInt("0\n");
const ff = [0, 1];

const fibo = (n) => {
  if (ff[n] === undefined) ff[n] = BigInt(fibo(n - 1)) + BigInt(fibo(n - 2));
  return ff[n];
};

console.log(fibo(input).toString());
