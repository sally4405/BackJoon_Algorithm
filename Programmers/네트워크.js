// https://programmers.co.kr/learn/courses/30/lessons/43162
// [참고](https://velog.io/@so-soon/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC)

const root = Array.from({ length: 200 }, (v, i) => i);
const rank = Array.from({ length: 200 }, () => 0);

function solution(n, computers) {
  var answer = 0;
  const res = new Set();
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (computers[i][j] == 1) {
        union(i, j);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    root[i] = find(i);
    res.add(root[i]);
  }
  answer = res.size;

  return answer;
}

const find = (x) => {
  if (root[x] == x) {
    return x;
  } else {
    return (root[x] = find(root[x]));
  }
};

const union = (x, y) => {
  x = find(x);
  y = find(y);

  if (x == y) return;

  if (rank[x] < rank[y]) {
    root[x] = y;
  } else {
    root[y] = x;
    if (rank[x] == rank[y]) {
      rank[x]++;
    }
  }
};

// const n = 3;
// const computers = [
//   [1, 1, 0],
//   [1, 1, 0],
//   [0, 0, 1],
// ];
// return 2

// const n = 3;
// const computers = [
//   [1, 1, 0],
//   [1, 1, 1],
//   [0, 1, 1],
// ];
// // return 1

// const n = 3;
// const computers = [
//   [1, 0, 1],
//   [0, 1, 1],
//   [1, 1, 1],
// ];
// // return 1

// const n = 5;
// const computers = [
//   [1, 0, 0, 0, 0],
//   [0, 1, 1, 0, 0],
//   [0, 1, 1, 0, 0],
//   [0, 0, 0, 1, 0],
//   [0, 0, 0, 0, 1],
// ];
// // return 4

const n = 6;
const computers = [
  [1, 0, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 0],
  [0, 0, 1, 1, 0, 0],
  [1, 0, 1, 1, 0, 1],
  [0, 1, 0, 0, 1, 1],
  [0, 0, 0, 1, 1, 1],
];
// return 3

console.log(solution(n, computers));
