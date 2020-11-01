// https://www.acmicpc.net/problem/10430
// 나머지

// const [A, B, C] = require("fs").readFileSync("/dev/stdin").toString().split(" ").map((n) => parseInt(n));
const [A, B, C] = "5 8 4\n".split(" ").map((n) => parseInt(n));

console.log((A + B) % C);
console.log(((A % C) + (B % C)) % C);
console.log((A * B) % C);
console.log(((A % C) * (B % C)) % C);
