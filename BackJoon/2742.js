// https://www.acmicpc.net/problem/2742
// 기찍 N

// const input = parseInt(require("fs").readFileSync("/dev/stdin").toString());
const input = parseInt("5\n");
let result = "";

for (let i = input; i > 0; i--) {
  result += `${i}\n`;
}

console.log(result);
