// https://www.acmicpc.net/problem/1920
// 수 찾기

// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const input = "5\n4 1 5 2 3\n5\n1 3 7 9 5\n".split("\n");

const N = parseInt(input[0]);
const A = input[1].split(" ").map((n) => parseInt(n));
const B = input[3].split(" ").map((n) => parseInt(n));

A.sort((a, b) => a - b);

const search = (num, low, high) => {
  const mid = Math.floor((low + high) / 2);

  if (low > high) {
    console.log(0);
    return;
  }

  if (A[mid] === num) {
    console.log(1);
    return;
  } else if (A[mid] > num) {
    search(num, low, mid - 1);
  } else if (A[mid] < num) {
    search(num, mid + 1, high);
  }
};

B.forEach((n) => search(n, 0, N - 1));
