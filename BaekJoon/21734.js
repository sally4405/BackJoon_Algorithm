// https://www.acmicpc.net/problem/21734
// SMUPC의 등장

// const input = require("fs").readFileSync("/dev/stdin").toString().split("");
const input = "smupc".split("");
let answer = "";

input.map(
  (n) =>
    (answer +=
      n.repeat(
        n
          .charCodeAt(0)
          .toString()
          .split("")
          .reduce((acc, cur) => acc + parseInt(cur), 0)
      ) + "\n")
);

console.log(answer);
