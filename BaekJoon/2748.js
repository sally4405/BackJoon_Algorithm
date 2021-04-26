// https://www.acmicpc.net/problem/2748
// 피보나치 수 2

const start = new Date().getTime();

// const input = parseInt(require("fs").readFileSync("/dev/stdin").toString());
const input = parseInt("90\n");
const ff = [0, 1];

const fibo = (n) => {
  if (ff[n] === undefined) ff[n] = BigInt(fibo(n - 1)) + BigInt(fibo(n - 2));
  return ff[n];
};

console.log(fibo(input).toString());

const end = new Date().getTime() - start;
console.log("소요된 시간: " + end + "ms");
