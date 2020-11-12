// https://www.acmicpc.net/problem/11021
// A+B - 7

// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const input = "5\n1 1\n2 3\n3 4\n9 8\n5 2\n".split("\n");

let answer = "";
for (let i = 1; i < input.length - 1; i++) {
  answer += `Case #${i}: ${input[i].split(" ").reduce((acc, cur) => acc + parseInt(cur), 0)}\n`;
}

console.log(answer);
