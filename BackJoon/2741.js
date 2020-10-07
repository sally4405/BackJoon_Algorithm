// https://www.acmicpc.net/problem/2741
// N 찍기

// const input = parseInt(require("fs").readFileSync("/dev/stdin").toString());
const input = parseInt("5\n");
let result = "";

for (let i = 1; i < input + 1; i++) {
  result += `${i}\n`;
}

console.log(result);
