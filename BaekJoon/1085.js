// https://www.acmicpc.net/problem/1085
// 직사각형에서 탈출

// const input = require("fs").readFileSync("/dev/stdin").toString().split(" ").map((n) => parseInt(n));;
const input = "6 2 10 3\n".split(" ").map((n) => parseInt(n));

console.log(Math.min(...input, input[2] - input[0], input[3] - input[1]));
