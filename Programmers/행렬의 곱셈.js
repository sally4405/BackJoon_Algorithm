// https://programmers.co.kr/learn/courses/30/lessons/12949

function solution(arr1, arr2) {
  const answer = [];

  for (let i = 0; i < arr1.length; i++) {
    answer.push([]);
    for (let j = 0; j < arr2[0].length; j++) {
      let sum = 0;
      for (let k = 0; k < arr1[0].length; k++) {
        sum += arr1[i][k] * arr2[k][j];
      }
      answer[i].push(sum);
    }
  }
  return answer;
}

// const arr1 = [
//   [1, 4],
//   [3, 2],
//   [4, 1],
// ];
// const arr2 = [
//   [3, 3],
//   [3, 3],
// ];
// // [[15, 15], [15, 15], [15, 15]]

const arr1 = [
  [2, 3, 2],
  [4, 2, 4],
  [3, 1, 4],
];
const arr2 = [
  [5, 4, 3],
  [2, 4, 1],
  [3, 1, 1],
];
// [[22, 22, 11], [36, 28, 18], [29, 20, 14]]

// const arr1 = [
//   [1, 2, 3],
//   [4, 5, 6],
// ];
// const arr2 = [
//   [1, 4],
//   [2, 5],
//   [3, 6],
// ];
// // return : [[14, 32], [32, 77]]

console.log(solution(arr1, arr2));
