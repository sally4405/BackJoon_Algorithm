// https://www.acmicpc.net/problem/2869
// 달팽이는 올라가고 싶다

// const [A, B, V]= require("fs").readFileSync("/dev/stdin").toString().split(" ").map((n) => parseInt(n));
// const [A, B, V] = "2 1 5\n".split(" ").map((n) => parseInt(n));
const [A, B, V] = "3 1 10\n".split(" ").map((n) => parseInt(n));

console.log(Math.ceil((V - A) / (A - B)) + 1);
