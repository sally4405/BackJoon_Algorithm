// https://www.acmicpc.net/problem/2775
// 부녀회장이 될테야

// const input = require("fs").readFileSync("/dev/stdin").toString().split('\n').map(n => parseInt(n));
const input = [4, 13, 14, 1, 3, 2, 3, 4, 5];

const loop = (k, n) => {
  if (!k) return n;
  let kFloor = 0;
  for (let i = 1; i <= n; i++) {
    kFloor += loop(k - 1, i);
  }
  return kFloor;
};

const testCase = input[0];
for (let i = 0; i < testCase; i++) {
  const k = input[i * 2 + 1];
  const n = input[i * 2 + 2];
  console.log(loop(k, n));
}
