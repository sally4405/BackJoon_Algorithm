// https://www.acmicpc.net/problem/10871
// X보다 작은 수

// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const input = "10 5\n1 10 4 9 2 3 8 5 7 6\n".split("\n");

const target = parseInt(input[0].split(" ")[1]);
let result = "";

input[1].split(" ").map((n) => {
  if (parseInt(n) < target) result += `${n} `;
});

console.log(result);
