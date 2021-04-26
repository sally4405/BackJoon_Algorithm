// https://www.acmicpc.net/problem/10872
// 팩토리얼

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString();
const input = 1;
const num = parseInt(input);

let result = 1;
for (let i = 0; i < num; i++) {
  result *= i + 1;
}
console.log(result);
