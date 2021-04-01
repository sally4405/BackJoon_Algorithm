// https://www.acmicpc.net/problem/21314
// 민겸 수

// const input = require("fs").readFileSync("/dev/stdin").toString().split("");
const input = "MM\n".split("");
// const input = "MKKMMK\n".split("");
input.pop();

let min = "";
let max = "";

let cnt = 0;

while (input.length) {
  const target = input.shift();
  if (target === "M") {
    cnt++;
    if (!input.length) {
      min += `1${"0".repeat(cnt - 1)}`;
      max += "1".repeat(cnt);
    }
  } else {
    min += cnt ? `1${"0".repeat(cnt - 1)}5` : "5";
    max += cnt ? `5${"0".repeat(cnt)}` : "5";
    cnt = 0;
  }
}

console.log(max);
console.log(min);
