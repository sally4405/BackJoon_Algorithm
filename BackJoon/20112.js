// https://www.acmicpc.net/problem/20112
// 사토르 마방진

// const [N, ...input] = require("fs").readFileSync("/dev/stdin").toString().split("\n");
// const [N, ...input] = "3\nAAB\nACD\nBDE\n".split("\n");
const [N, ...input] = "4\nAPPL\nPPAP\nPADD\nLPOV\n".split("\n");

input.pop();
const arr = input.map((n) => n.split(""));

for (let i = 0; i < N; i++) {
  for (let j = 0; j < i; j++) {
    if (arr[i][j] !== arr[j][i]) return console.log("NO");
  }
}

console.log("YES");
