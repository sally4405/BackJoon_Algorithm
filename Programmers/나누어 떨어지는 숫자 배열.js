// https://programmers.co.kr/learn/courses/30/lessons/12910

function solution(arr, divisor) {
  var answer = [];
  answer = arr.filter((v) => !(v % divisor)).sort((a, b) => a - b);

  return answer.length ? answer : [-1];
}

// const arr = [5, 9, 7, 10];
// const divisor = 5;
// // [5, 10]

// const arr = [2, 36, 1, 3];
// const divisor = 1;
// // [5, 10]

const arr = [3, 2, 6];
const divisor = 10;
// [-1]

console.log(solution(arr, divisor));
