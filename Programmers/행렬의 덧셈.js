// https://programmers.co.kr/learn/courses/30/lessons/12950

function solution(arr1, arr2) {
  var answer = Array.from({ length: arr1.length }, (v) => []);
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1[0].length; j++) {
      answer[i][j] = arr1[i][j] + arr2[i][j];
    }
  }
  return answer;
}

// const arr1 = [
//   [1, 2],
//   [2, 3],
// ];
// const arr2 = [
//   [3, 4],
//   [5, 6],
// ];
// // [[4,6],[7,9]]

const arr1 = [[1], [2]];
const arr2 = [[3], [4]];
// [[4],[6]]

console.log(solution(arr1, arr2));
