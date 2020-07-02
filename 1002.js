// https://www.acmicpc.net/problem/1002
// 터렛

// const input = [3, 0, 0, 13, 40, 0, 37, 0, 0, 3, 0, 7, 4, 1, 1, 1, 1, 1, 5];
const input = [8, 0, 0, 1, 0, 4, 5, 0, 0, 1, 0, 4, 3, 0, 0, 1, 0, 4, 2, 0, 0, 1, 0, 4, 6, 0, 0, 1, 0, 4, 5];
// const input = [1, 1, 1, 1, 1, 1, 5];
// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .split("\n")
//   .map((n) => parseInt(n));

const getDistance = (x1, y1, x2, y2) => {
  return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
};

const testCase = input[0];
for (let i = 0; i < testCase; i++) {
  const x1 = input[i * 6 + 1];
  const y1 = input[i * 6 + 2];
  const r1 = input[i * 6 + 3];
  const x2 = input[i * 6 + 4];
  const y2 = input[i * 6 + 5];
  const r2 = input[i * 6 + 6];

  const sumR = r1 + r2;
  const diffR = Math.abs(r1, r2);

  const d = getDistance(x1, y1, x2, y2);

  if (d !== 0) {
    if (d < sumR) {
      if (d > diffR) console.log(2);
      else if (d === diffR) console.log(1);
      else if (d < diffR) console.log(0);
    } else if (d === sumR) console.log(1);
    else if (d > sumR) console.log(0);
  } else {
    if (r1 === r2) console.log(-1);
    else console.log(0);
  }
}
