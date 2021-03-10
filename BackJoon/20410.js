// https://www.acmicpc.net/problem/20410
// 추첨상 사수 대작전! (Easy)

// const [m, seed, x1, x2] = require("fs").readFileSync("/dev/stdin").toString().split(" ").map((n) => parseInt(n));
const [m, seed, x1, x2] = "13 5 2 9\n".split(" ").map((n) => parseInt(n));

let a = 0;
let c = 0;

while (a < m) {
  while (c < m) {
    if ((a * seed + c) % m === x1 && (a * x1 + c) % m === x2) return console.log(a, c);
    c++;
  }
  c = 0;
  a++;
}
