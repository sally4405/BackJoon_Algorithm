// https://www.acmicpc.net/problem/11022
// A+B - 8

// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const input = "5\n1 1\n2 3\n3 4\n9 8\n5 2\n".split("\n");

let answer = "";
for (let i = 1; i < input.length - 1; i++) {
  const target = input[i].split(" ");
  answer += `Case #${i}: ${target[0]} + ${target[1]} = ${target.reduce((acc, cur) => acc + parseInt(cur), 0)}\n`;
}

console.log(answer);
