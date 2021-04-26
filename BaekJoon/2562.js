// https://www.acmicpc.net/problem/2562
// 최댓값

// const input = require("fs").readFileSync("/dev/stdin").toString().split('\n').map(n => parseInt(n));
const input = [3, 29, 38, 12, 57, 74, 40, 85, 61];

let max = input[0];
let maxIndex = 1;

for (let i = 1; i < input.length; i++) {
  if (input[i] > max) {
    max = input[i];
    maxIndex = i + 1;
  }
}

console.log(`${max}\n${maxIndex}`);

// 85
// 8
