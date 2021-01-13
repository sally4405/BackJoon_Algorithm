// https://www.acmicpc.net/problem/20113
// 긴급 회의

// const [N, arr] = require("fs").readFileSync("/dev/stdin").toString().split("\n");
// const [N, arr] = "5\n3 1 4 3 0\n".split("\n");
const [N, arr] = "7\n2 1 1 7 6 3 3\n".split("\n");

const result = Array.from({ length: N + 1 }, (v) => 0);
arr.split(" ").map((n) => result[parseInt(n)]++);

result.shift();
const max = Math.max(...result);

console.log(result.filter((v) => v === max).length === 1 ? result.indexOf(max) + 1 : "skipped");
