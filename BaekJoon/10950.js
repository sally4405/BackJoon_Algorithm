// https://www.acmicpc.net/problem/10950
// A+B - 3

// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const input = "5\n1 1\n2 3\n3 4\n9 8\n5 2\n".split("\n");

input.shift();
input.pop();

input.map((tc) =>
  console.log(
    tc
      .split(" ")
      .map((n) => parseInt(n))
      .reduce((acc, cur) => acc + cur, 0)
  )
);
