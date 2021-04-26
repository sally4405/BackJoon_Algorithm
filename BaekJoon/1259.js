// https://www.acmicpc.net/problem/1259
// 팰린드롬수

// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const input = "121\n1231\n12421\n3\n0\n".split("\n");

let target = input.shift();

while (target !== "0") {
  const half = Math.floor(target.length / 2);
  const start = target.slice(0, half);
  const end = target.split("").reverse().join("").slice(0, half);
  if (start === end) console.log("yes");
  else console.log("no");

  target = input.shift();
}
