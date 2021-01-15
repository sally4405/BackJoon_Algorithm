// https://www.acmicpc.net/problem/18766
// 카드 바꿔치기

// const [T, ...input] = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const [T, ...input] = "4\n5\nR0 B9 R5 Y3 R2\nR0 B8 R6 Y3 R2\n1\nR0\nR0\n3\nR1 R0 R0\nR0 R1 R1\n3\nR1 R1 R0\nR0 R1 R1\n".split("\n");

let result = "";

for (let i = 0; i < T; i++) {
  const N = input.shift();
  const T1 = input.shift().split(" ").sort().join("");
  const T2 = input.shift().split(" ").sort().join("");
  result += T1 === T2 ? "NOT CHEATER\n" : "CHEATER\n";
}

console.log(result);
