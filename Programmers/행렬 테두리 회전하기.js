// https://programmers.co.kr/learn/courses/30/lessons/77485

function solution(rows, columns, queries) {
  var answer = [];
  const arr = Array.from({ length: rows }, (v, i) => Array.from({ length: columns }, (cv, ci) => i * columns + ci + 1));

  for (let i = 0; i < queries.length; i++) {
    const [row1, col1, row2, col2] = queries[i];
    let before = arr[row1 - 1][col1 - 1];
    let min = before;

    for (let col = col1; col < col2; col++) {
      const temp = arr[row1 - 1][col];
      arr[row1 - 1][col] = before;
      before = temp;
      min = min > before ? before : min;
    }

    for (let row = row1; row < row2; row++) {
      const temp = arr[row][col2 - 1];
      arr[row][col2 - 1] = before;
      before = temp;
      min = min > before ? before : min;
    }

    for (let col = col2 - 2; col > col1 - 2; col--) {
      const temp = arr[row2 - 1][col];
      arr[row2 - 1][col] = before;
      before = temp;
      min = min > before ? before : min;
    }

    for (let row = row2 - 2; row > row1 - 2; row--) {
      const temp = arr[row][col1 - 1];
      arr[row][col1 - 1] = before;
      before = temp;
      min = min > before ? before : min;
    }

    answer.push(min);
  }
  return answer;
}

const rows = 6;
const columns = 6;
const queries = [
  [2, 2, 5, 4],
  [3, 3, 6, 6],
  [5, 1, 6, 3],
];
// [8, 10, 25]

// const rows = 3;
// const columns = 3;
// const queries = [
//   [1, 1, 2, 2],
//   [1, 2, 2, 3],
//   [2, 1, 3, 2],
//   [2, 2, 3, 3],
// ];
// // [1, 1, 5, 3]

// const rows = 100;
// const columns = 97;
// const queries = [[1, 1, 100, 97]];
// // [1]

console.log(solution(rows, columns, queries));
