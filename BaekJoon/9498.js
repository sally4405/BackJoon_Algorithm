// https://www.acmicpc.net/problem/9498
// 시험 성적

// const input = parseInt(require("fs").readFileSync("/dev/stdin").toString());
const input = parseInt("100\n");

console.log(input >= 90 ? "A" : input >= 80 ? "B" : input >= 70 ? "C" : input >= 60 ? "D" : "F");
