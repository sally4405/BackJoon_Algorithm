// https://programmers.co.kr/learn/courses/30/lessons/42748

function solution(array, commands) {
  var answer = [];
  commands.map((arr) => answer.push(array.slice(arr[0] - 1, arr[1]).sort((a, b) => a - b)[arr[2] - 1]));
  return answer;
}

const array = [1, 5, 2, 6, 3, 7, 4];
const commands = [
  [2, 5, 3],
  [4, 4, 1],
  [1, 7, 3],
];
// [5, 6, 3]

console.log(solution(array, commands));
