// https://www.acmicpc.net/problem/21867
// Java Bitecode

// const [N, S] = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const [N, S] = "4\nABCD\n".split("\n");

const answer = S.split("")
  .filter((n) => n !== "J" && n !== "A" && n !== "V")
  .join("");

console.log(answer ? answer : "nojava");
