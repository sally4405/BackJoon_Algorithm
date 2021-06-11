// https://leetcode.com/problems/xor-operation-in-an-array/
// XOR Operation in an Array

var xorOperation = function (n, start) {
  return Array.from({ length: n }, (v, i) => start + 2 * i).reduce((acc, cur) => acc ^ cur);
};

// const n = 5;
// const start = 0;

// const n = 4;
// const start = 3;

// const n = 1;
// const start = 7;

const n = 10;
const start = 5;

console.log(xorOperation(n, start));
