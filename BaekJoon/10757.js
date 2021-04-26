// https://www.acmicpc.net/problem/10757
// 큰 수 A+B

// const [A, B] = require("fs").readFileSync("/dev/stdin").toString().split(" ");
const [A, B] = "9223372036854775807 9223372036854775808\n".split(" ");

console.log((BigInt(A) + BigInt(B)).toString());
