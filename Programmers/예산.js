// https://programmers.co.kr/learn/courses/30/lessons/12982

function solution(d, budget) {
  let answer = 0;

  d.sort((a, b) => a - b);
  let cost = 0;

  for (let i = 0; i < d.length; i++) {
    cost += d[i];
    if (cost > budget) break;
    answer++;
  }

  return answer;
}
