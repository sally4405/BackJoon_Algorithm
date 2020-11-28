// https://www.acmicpc.net/problem/3009
// 네 번째 점

// const [A, B, C] = require("fs").readFileSync("/dev/stdin").toString().split("\n").map((n) => n.split(" ").map((m) => parseInt(m)));
const [A, B, C] = "30 20\n10 10\n10 20\n".split("\n").map((n) => n.split(" ").map((m) => parseInt(m)));

console.log(`${A[0] === B[0] ? C[0] : A[0] === C[0] ? B[0] : A[0]} ${A[1] === B[1] ? C[1] : A[1] === C[1] ? B[1] : A[1]}`);
