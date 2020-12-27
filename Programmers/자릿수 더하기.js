// https://programmers.co.kr/learn/courses/30/lessons/12931

function solution(n) {
  return n
    .toString()
    .split("")
    .reduce((acc, cur) => acc + parseInt(cur), 0);
}

const n = 123;
console.log(solution(n));
