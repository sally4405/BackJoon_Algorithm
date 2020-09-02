// https://www.acmicpc.net/problem/10818
// 최소, 최대

// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
// const input = ["5 ", "20 10 35 30 7"];
const input = "5\n20 10 35 30 7 \n".split("\n");

const T = parseInt(input[0]);
const arr = input[1].split(" ").map((n) => parseInt(n));

let min = arr[0];
let max = arr[0];

for (let i = 1; i < T; i++) {
  min = min < arr[i] ? min : arr[i];
  max = max > arr[i] ? max : arr[i];
}

console.log(`${min} ${max}`);

// 안됨. 입력할 때 공백 같은 것 때문에 길이가 달라져서 문제가 생기는거 같은데 얼마나 달라지는지를 모르겠음!
arr.pop();
console.log(`${Math.min(...arr)} ${Math.max(...arr)}`);
