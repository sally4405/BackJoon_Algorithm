// https://www.acmicpc.net/problem/2920
// 음계

// const input = require("fs").readFileSync("/dev/stdin").toString().split(' ').map(n => parseInt(n));
// const input = [1, 2, 3, 4, 5, 6, 7, 8]; // ascending
// const input = [8, 7, 6, 5, 4, 3, 2, 1]; // descending
const input = [8, 1, 7, 2, 6, 3, 5, 4]; // mixed

let scale = input[0] < input[1] ? "ascending" : "descending";
const isAscending = input[0] < input[1];

for (let i = 1; i < input.length - 1; i++) {
  if ((isAscending && input[i] > input[i + 1]) || (!isAscending && input[i] < input[i + 1])) {
    scale = "mixed";
    break;
  }
}

console.log(scale);
