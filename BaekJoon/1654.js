// https://www.acmicpc.net/problem/1654
// 랜선 자르기

// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const input = "4 11\n802\n743\n457\n539\n".split("\n");
input.pop();

const kn = input
  .shift()
  .split(" ")
  .map((n) => parseInt(n));
const K = kn[0];
const N = kn[1];
const lines = input.map((n) => parseInt(n));

const maxLength = Math.floor(lines.reduce((acc, cur) => acc + cur, 0) / N);

const cuttable = (cuttingLength) => {
  return lines.map((line) => Math.floor(line / cuttingLength)).reduce((acc, cur) => acc + cur, 0) >= N;
};

const loop = (lengthRange) => {
  const diff = lengthRange.max - lengthRange.min;
  if (!diff || diff === 1) {
    return cuttable(lengthRange.max) ? lengthRange.max : lengthRange.min;
  }
  const average = Math.floor((lengthRange.min + lengthRange.max) / 2);
  if (cuttable(average)) return loop({ min: average, max: lengthRange.max });
  else return loop({ min: lengthRange.min, max: average });
};

console.log(loop({ min: 0, max: maxLength }));
