// https://programmers.co.kr/learn/courses/30/lessons/12903?language=javascript

function solution(s) {
  return s.slice(Math.ceil(s.length / 2) - 1, Math.floor(s.length / 2 + 1));
}

const s = "abcde"; // c    // 2,3
const a = "qwer"; // we   // 1,3

console.log(solution(s));
console.log(solution(a));
