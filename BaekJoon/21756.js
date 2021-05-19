// https://www.acmicpc.net/problem/21756
// 지우개

// const N = require("fs").readFileSync("/dev/stdin").toString();
const N = "5\n";

let i = 0;
let target = 1;
let sum = 0;

while (true) {
  sum += target;
  if (sum >= N) break;
  i++;
  target = Math.pow(2, i);
}

console.log(target);
