// https://www.acmicpc.net/problem/1931
// 회의실 배정

// const [N, ...input] = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const [N, ...input] = "11\n1 4\n3 5\n0 6\n5 7\n3 8\n5 9\n6 10\n8 11\n8 12\n2 13\n12 14\n".split("\n");
input.pop();
let answer = 0;

const sorted = input
  .map((n) => n.split(" ").map((m) => parseInt(m)))
  .sort((a, b) => {
    if (a[0] > b[0]) return 1;
    if (a[0] < b[0]) return -1;
    return a[1] - b[1];
  });

let index = sorted.indexOf(
  sorted.reduce((acc, cur) => {
    if (acc[1] > cur[1]) return cur;
    return acc;
  }, sorted[0])
);
answer++;

let finalTime = sorted[index][1];

while (true) {
  let nextIndex;
  for (let i = index + 1; i < N; i++) {
    if (sorted[i][0] < finalTime) continue;
    if (!nextIndex) {
      nextIndex = i;
      continue;
    }
    nextIndex = sorted[nextIndex][1] < sorted[i][1] ? nextIndex : i;
  }

  if (index === nextIndex || nextIndex > N - 1 || !nextIndex) break;

  index = nextIndex;
  finalTime = sorted[nextIndex][1];
  answer++;
}

console.log(answer);
