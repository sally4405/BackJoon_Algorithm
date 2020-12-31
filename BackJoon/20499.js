// https://www.acmicpc.net/problem/20499
// Darius님 한타 안 함?

// const [K, D, A] = require("fs").readFileSync("/dev/stdin").toString().split("/");
const [K, D, A] = "0/5/3".split("/").map((n) => parseInt(n));

console.log(K + A < D || !D ? "hasu" : "gosu");
