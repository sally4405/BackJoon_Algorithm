// https://www.acmicpc.net/problem/20494
// 스시

// const [N, ...arr] = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const [N, ...arr] = "2\nABCDE\nFGH\n".split("\n");

console.log(arr.reduce((acc, cur) => acc + cur.length, 0));
