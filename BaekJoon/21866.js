// https://www.acmicpc.net/problem/21866
// 추첨을 통해 커피를 받자

// const input = require("fs").readFileSync("/dev/stdin").toString().split(" ");
const input = "100 0 0 0 0 0 0 0 0\n".split(" ");
const max = [100, 100, 200, 200, 300, 300, 400, 400, 500];

let sum = 0;

for (let i = 0; i < input.length; i++) {
  const target = parseInt(input[i]);
  if (target > max[i]) return console.log("hacker");
  sum += target;
}

if (sum >= 100) console.log("draw");
else console.log("none");
