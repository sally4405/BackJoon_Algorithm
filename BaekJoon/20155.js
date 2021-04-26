// https://www.acmicpc.net/problem/20155
// 우리 집 밑에 편의점이 있는데

// const [input, X] = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const [input, X] = "5 2\n1 2 1 1 2\n".split("\n");

const [N, M] = input.split(" ");
const result = Array.from({ length: parseInt(M) + 1 }, (v) => 0);

X.split(" ").map((n) => result[parseInt(n)]++);

console.log(Math.max(...result));
