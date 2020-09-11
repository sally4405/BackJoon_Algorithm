// https://www.acmicpc.net/problem/2439
// 별 찍기 - 2

// const input = parseInt(require("fs").readFileSync("/dev/stdin").toString());
const input = 5;
const blank = " ";
const char = "*";

for (let i = 1; i <= input; i++) {
  console.log(blank.repeat(input - i) + char.repeat(i));
}
