// https://www.acmicpc.net/problem/2798
// 블랙잭

// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n").map((l) => l.split(" ")).map((n) => n.map((m) => parseInt(m)));
// const input = "10 500\n93 181 245 214 315 36 185 138 216 295\n"
// const input = "5 21\n5 6 7 8 9\n"
const input = "5 21\n7 8 9 10 1\n"
  .split("\n")
  .map((l) => l.split(" "))
  .map((n) => n.map((m) => parseInt(m)));

const N = input[0][0];
const M = input[0][1];
const cards = input[1];

let result = 0;

for (let i = 0; i < N; i++) {
  if (cards[i] > M - 2) continue;

  for (let j = i + 1; j < N; j++) {
    if (cards[i] + cards[j] > M - 1) continue;

    for (let k = j + 1; k < N; k++) {
      const temp = cards[i] + cards[j] + cards[k];

      if (temp > M) continue;
      else if (temp === M) return console.log(temp);
      else {
        result = M - result < M - temp ? result : temp;
      }
    }
  }
}
console.log(result);
