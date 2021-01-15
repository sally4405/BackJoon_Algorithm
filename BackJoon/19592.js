// https://www.acmicpc.net/problem/19592
// 장난감 경주

// const [T, ...input] = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const [T, ...input] = "5\n3 12 11\n3 2 1\n3 12 9\n3 2 1\n3 12 10\n3 4 5\n3 80 80\n80 60 70\n3 80 80\n70 50 60\n".split("\n");

let answer = "";

for (let i = 0; i < T; i++) {
  const [N, X, Y] = input.shift().split(" ");
  const V = input.shift().split(" ");

  const Vn = V.pop();
  const timeList = V.map((n) => X / n);
  const fastSec = Math.min(...timeList);

  if (X / Vn < fastSec) {
    answer += "0\n";
    continue;
  }
  if ((X - Y) / Vn + 1 >= fastSec) {
    answer += "-1\n";
    continue;
  }

  let Z = 1;
  while (Z < Y) {
    if ((X - Z) / Vn + 1 < fastSec) {
      answer += `${Z}\n`;
      break;
    }
    Z++;
  }
}

console.log(answer);
