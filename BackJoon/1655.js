// https://www.acmicpc.net/problem/1655
// 가운데를 말해요

// const [N, ...input] = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const [N, ...input] = "7\n1\n5\n2\n10\n-99\n7\n5\n".split("\n");

let answer = "";
const array = Array.from({ length: parseInt(N) });

for (i = 0; i < N; i++) {
  array[i] = parseInt(input.shift());
  array.sort((a, b) => a - b);
  answer += `${array[Math.floor(i / 2)]}\n`;
}

console.log(answer);

///////////////////////////////////////

// let answer = "";
// const array = [];
// for (i = 0; i < N; i++) {
//   array.push(parseInt(input.shift()));
//   array.sort((a, b) => a - b);
//   answer += `${array[Math.floor((array.length - 1) / 2)]}\n`;
// }

// console.log(answer);

///////////////////////////////////////

// const answer = [];
// const min = [];
// const max = [];

// let target;

// for (let i = 0; i < N; i++) {
//   target = parseInt(input.shift());
//   if (target > answer[answer.length - 1]) {
//     max.push(target);
//     max.sort((a, b) => a - b);
//   } else {
//     min.push(target);
//     min.sort((a, b) => a - b);
//   }

//   if (max.length > min.length) {
//     target = max.shift();
//     min.push(target);
//     answer.push(target);
//   } else if (min.length > max.length + 1) {
//     target = min.pop();
//     max.push(target);
//     answer.push(target);
//   } else {
//     answer.push(min[min.length - 1]);
//   }
// }

// console.log(answer.join("\n"));
