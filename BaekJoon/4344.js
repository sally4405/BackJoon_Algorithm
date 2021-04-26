// https://www.acmicpc.net/problem/4344
// 평균은 넘겠지

// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const input = "5\n5 50 50 70 80 100\n7 100 95 90 80 70 60 50\n3 70 90 80\n3 70 90 81\n9 100 99 98 97 96 95 94 93 91\n".split("\n");
let answer = "";

input.shift();
input.pop();

input.map((tc) => {
  const target = tc.split(" ").map((n) => parseInt(n));
  const N = target.shift();
  const avg = target.reduce((acc, cur) => acc + cur, 0) / N;
  answer += ((target.filter((v) => v > avg).length / N) * 100).toFixed(3) + "%\n";
});

console.log(answer);
