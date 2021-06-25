// https://leetcode.com/problems/find-center-of-star-graph/
// Find Center of Star Graph

var findCenter = function (edges) {
  const [a, b] = edges[0];
  if (edges[1].includes(a)) return a;
  return b;
};

const edges = [
  [1, 2],
  [2, 3],
  [4, 2],
];
// Output: 2

// const edges = [
//   [1, 2],
//   [5, 1],
//   [1, 3],
//   [1, 4],
// ];
// // Output: 1

console.log(findCenter(edges));
