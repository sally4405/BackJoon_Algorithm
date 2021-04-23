// https://www.acmicpc.net/problem/21556
// 우물 파기

// const [N, input] = require("fs").readFileSync("/dev/stdin").toString().split("\n");
// const [N, input] = "5\n1 3 2 5 4\n".split("\n");
// const [N, input] = "5\n1 3 9 13 24\n".split("\n");
// const [N, input] = "6\n2 3 7 23 51 107\n".split("\n");
// const [N, input] = "7\n1 2 3 4 5 6 7\n".split("\n");
// const [N, input] = "8\n1 2 3 4 5 6 7 8\n".split("\n");
// const [N, input] = "8\n5 1 5 7 8 6 8 4 2 54 32 55 68 105 3201 111 3 5 7 87\n".split("\n");
const [N, input] = "8\n5 5 7 8 6 8 4 2\n".split("\n");

const A = input
  .split(" ")
  .map((n) => Number(n))
  .sort((a, b) => a - b);

const sumList = [];
for (let i = 0; i < A.length - 1; i++) {
  for (let j = i + 1; j < A.length; j++) {
    sumList.push(A[i] + A[j]);
  }
}
sumList.sort((a, b) => a - b);
console.log(sumList[Math.ceil(sumList.length / 2) - 1]);
