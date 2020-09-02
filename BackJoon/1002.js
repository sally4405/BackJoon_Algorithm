// https://www.acmicpc.net/problem/1002
// 터렛

// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

// const input = [3, 0, 0, 13, 40, 0, 37, 0, 0, 3, 0, 7, 4, 1, 1, 1, 1, 1, 5];
// const input = [8, 0, 0, 1, 0, 4, 5, 0, 0, 1, 0, 4, 3, 0, 0, 1, 0, 4, 2, 0, 0, 1, 0, 4, 6, 0, 0, 1, 0, 4, 5];
// const input = [1, 1, 1, 1, 1, 1, 5];
// const input = [2, 0, 0, 1, 0, 0, 1, 0, 0, 10, 0, 0, 1];
const input = "3\n0 0 13 40 0 37\n0 0 3 0 7 4\n1 1 1 1 1 5\n".split("\n");
input.pop();
const testCase = parseInt(input.shift());
const inputArray = input.map((n) => n.split(" ").map((n) => parseInt(n)));

const getDistance = (x1, y1, x2, y2) => {
  return Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2);
};

for (let i = 0; i < testCase; i++) {
  const x1 = parseInt(inputArray[i][0]);
  const y1 = parseInt(inputArray[i][1]);
  const r1 = parseInt(inputArray[i][2]);
  const x2 = parseInt(inputArray[i][3]);
  const y2 = parseInt(inputArray[i][4]);
  const r2 = parseInt(inputArray[i][5]);

  const sumR = Math.pow(r1 + r2, 2);
  const diffR = Math.pow(Math.abs(r1 - r2), 2);

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
