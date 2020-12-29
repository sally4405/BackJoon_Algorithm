// https://programmers.co.kr/learn/courses/30/lessons/42884
// [참고](https://programmers.co.kr/questions/14636)

function solution(routes) {
  var answer = [];
  let sorted = routes.sort((a, b) => a[1] - b[1]);
  while (sorted.length) {
    const target = sorted.shift()[1];
    answer.push(target);
    sorted = sorted.filter((n) => n[0] > target || n[1] < target);
  }
  return answer.length;
}

const routes = [
  [-20, 15],
  [-14, -5],
  [-18, -13],
  [-5, -3],
];
console.log(solution(routes));
