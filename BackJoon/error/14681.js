// https://www.acmicpc.net/problem/14681
// 사분면 고르기

// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n").map((n) => parseInt(n));
// const input = "12\n5\n".split("\n").map((n) => parseInt(n));
// const input = "-12\n5\n".split("\n").map((n) => parseInt(n));
const input = "-9\n-13\n".split("\n").map((n) => parseInt(n));
// const input = "9\n-13\n".split("\n").map((n) => parseInt(n));

console.log(input[0] > 0 ? (input[1] > 0 ? 1 : 4) : input[1] > 0 ? 2 : 3);

// 컴파일 에러 (파일 위치 문제로 추정됨)
