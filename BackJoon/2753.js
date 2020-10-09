// https://www.acmicpc.net/problem/2753
// 윤년

// const input = parseInt(require("fs").readFileSync("/dev/stdin").toString())
const input = parseInt("1999\n");

console.log(input % 4 ? 0 : input % 100 ? 1 : input % 400 ? 0 : 1);
