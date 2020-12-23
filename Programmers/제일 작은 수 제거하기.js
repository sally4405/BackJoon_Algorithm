// https://programmers.co.kr/learn/courses/30/lessons/12935

function solution(arr) {
  const min = Math.min(...arr);
  var answer = arr.filter((v) => v !== min);
  return answer.length ? answer : [-1];
}

const arr = [4, 3, 2, 1];
console.log(solution(arr));
