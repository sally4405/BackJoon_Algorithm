// https://www.acmicpc.net/problem/10250
// ACM 호텔

// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const input = "2\n6 12 10\n30 50 72\n10 12 10\n2 10 2\n2 10 10\n2 20 20\n".split("\n");

input.shift();
input.pop();
const result = input.reduce((acc, cur) => {
  const [H, W, N] = cur.split(" ").map((n) => parseInt(n));
  const nH = N % H;
  const nW = Math.floor(N / H);
  return (acc += nH ? (nW + 1 >= 10 ? `${nH}${nW + 1}\n` : `${nH}0${nW + 1}\n`) : nW >= 10 ? `${H}${nW}\n` : `${H}0${nW}\n`);
}, "");

console.log(result);
