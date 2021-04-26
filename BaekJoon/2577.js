// https://www.acmicpc.net/problem/2577
// 숫자의 개수

// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n").map((n) => parseInt(n));
const input = "150\n266\n427\n".split("\n").map((n) => parseInt(n));
const result = Array.from({ length: 10 }, (v, i) => 0 );

(input[0] * input[1] * input[2]).toString().split("").map((n) => result[parseInt(n)]++);

result.forEach((n) => console.log(n));

