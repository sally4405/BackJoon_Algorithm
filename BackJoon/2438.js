// https://www.acmicpc.net/problem/2438
// 별 찍기 - 1

// const input = parseInt(require("fs").readFileSync("/dev/stdin").toString());
const input = 5;
const char = "*";

for (let i = 0; i < input; i++) {
  console.log(char.repeat(i + 1));
}
