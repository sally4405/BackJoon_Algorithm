// https://www.acmicpc.net/problem/15638
// No Description

// const [N, ...input] = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const [N, ...input] = "5\n3 6 2 9 4\n".split("\n");

for (let i = 2; i < N; i++) {
  if (!(N % i)) return console.log("No");
}

return console.log("Yes");
