// https://www.acmicpc.net/problem/2750
// 수 정렬하기

// const [N, ...input] = require("fs").readFileSync("/dev/stdin").toString().split("\n").map((n) => parseInt(n));
const [N, ...input] = "5\n5\n4\n3\n2\n1\n".split("\n").map((n) => parseInt(n));
input.pop();

console.log(input.sort((a, b) => a - b).join("\n"));
