// https://programmers.co.kr/learn/courses/30/lessons/12932

function solution(n) {
  return n
    .toString()
    .split("")
    .map((n) => parseInt(n))
    .reverse();
}

const n = 12345;
console.log(solution(n));
