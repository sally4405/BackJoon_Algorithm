// https://www.acmicpc.net/problem/2884
// 알람 시계

// const [H, M] = require("fs").readFileSync("/dev/stdin").toString().split(" ").map((n) => parseInt(n));
const [H, M] = "0 30\n".split(" ").map((n) => parseInt(n));

console.log(`${M >= 45 ? H : H > 0 ? H - 1 : H + 23} ${M >= 45 ? M - 45 : M + 15}`);
