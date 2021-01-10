// https://www.acmicpc.net/problem/20053
// 최소, 최대 2

// const [T, ...arr] = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const [T, ...arr] = "3\n5\n20 28 22 25 21\n5\n30 21 17 25 29\n5\n20 10 35 30 7\n".split("\n");

let answer = "";

for (let i = 0; i < T; i++) {
  const N = arr.shift();
  const list = arr
    .shift()
    .split(" ")
    .map((n) => parseInt(n));
  let min = list[0];
  let max = list[0];
  for (let j = 1; j < N; j++) {
    min = min > list[j] ? list[j] : min;
    max = max > list[j] ? max : list[j];
  }
  answer += `${min} ${max}\n`;
}

console.log(answer);
