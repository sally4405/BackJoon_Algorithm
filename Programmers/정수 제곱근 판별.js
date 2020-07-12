// https://programmers.co.kr/learn/courses/30/lessons/12934

function solution(n) {
  var answer = 0;
  const x = Math.sqrt(n);

  if (Number.isInteger(x)) answer = Math.pow(x + 1, 2);
  else answer = -1;

  return answer;
}
