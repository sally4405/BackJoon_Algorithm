// https://programmers.co.kr/learn/courses/30/lessons/12943

function solution(num) {
  let answer = 0;
  let result = num;
  while (result !== 1) {
    if (answer === 500) return -1;
    result = result % 2 ? result * 3 + 1 : result / 2;
    answer++;
  }
  return answer;
}

const n = 626331;
console.log(solution(n));
