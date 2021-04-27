// https://www.acmicpc.net/problem/21556
// 우물 파기

const findMid = (arr) => {
  const sumList = [];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      sumList.push(arr[i] + arr[j]);
    }
  }
  sumList.sort((a, b) => a - b);
  console.log(`sum list: ${sumList}`);
  return sumList[Math.ceil(sumList.length / 2) - 1];
};

// const [N, input] = require("fs").readFileSync("/dev/stdin").toString().split("\n");
// const [N, input] = "5\n1 3 2 5 4\n".split("\n");
// const [N, input] = "5\n1 3 9 13 24\n".split("\n");
// const [N, input] = "6\n2 3 7 23 51 107\n".split("\n");
// const [N, input] = "7\n1 2 3 4 5 6 7\n".split("\n");
// const [N, input] = "8\n1 2 3 4 5 6 7 8\n".split("\n");
const [N, input] = "20\n1 2 3 4 5 5 5 6 7 7 8 8 32 54 55 68 87 105 111 3201\n".split("\n");
// const [N, input] = "8\n2 4 5 5 6 7 8 8\n".split("\n");

const A = input
  .split(" ")
  .map((n) => Number(n))
  .sort((a, b) => a - b);

const mid = Math.floor(A.length / 2);

if (A.length % 2) {
  console.log(A[mid - 1] + A[mid + 1]);
} else console.log(A[mid - 2] + A[mid + 1]);

console.log(findMid(A));
