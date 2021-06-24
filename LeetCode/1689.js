// https://leetcode.com/problems/partitioning-into-minimum-number-of-deci-binary-numbers/
// Partitioning Into Minimum Number Of Deci-Binary Numbers

var minPartitions = function (n) {
  const max = Math.max(...n.split(""));
  return max;
};

// const n = "32";
// // Output: 3

const n = "82734";
// Output: 8

// const n = "27346209830709182346";
// // Output: 9

console.log(minPartitions(n));
