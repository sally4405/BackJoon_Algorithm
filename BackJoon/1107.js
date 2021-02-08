// https://www.acmicpc.net/problem/1107
// 리모컨

// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const input = "5457\n3\n6 7 8\n".split("\n");
// const input = "5457\n9\n0 1 2 3 4 6 7 8 9\n".split("\n");

const target = input
  .shift()
  .split("")
  .map((n) => parseInt(n));
const brokenNum = parseInt(input.shift());
const brokenList = input
  .shift()
  .split(" ")
  .map((n) => parseInt(n))
  .sort();

if (brokenNum === 10) return console.log(0);
if (brokenNum === 0) return console.log(target.length);

let pushNum = "";

for (let i = 0; i < target.length; i++) {
  if (brokenList.includes(input[i])) {
  }
  pushNum += input[i];
}

console.log(pushNum.length + Math.abs(pushNum - target.join()));
