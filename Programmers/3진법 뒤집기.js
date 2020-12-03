// https://programmers.co.kr/learn/courses/30/lessons/68935

function solution(n) {
  var answer = parseInt(n.toString(3).split("").reverse().join(""), 3);

  return answer;
}

const n = 45;
console.log(solution(n));
