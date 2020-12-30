// https://programmers.co.kr/learn/courses/30/lessons/12928

function solution(n) {
  var answer = 0;
  for (let i = 1; i <= n; i++) {
    if (!(n % i)) answer += i;
  }
  return answer;
}

const n = 3000;
console.log(solution(n));
