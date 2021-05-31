// https://leetcode.com/problems/decompress-run-length-encoded-list/
// Decompress Run-Length Encoded List

var decompressRLElist = function (nums) {
  let answer = [];

  for (let i = 0; i < nums.length / 2; i++) {
    const freq = nums[2 * i];
    const val = nums[2 * i + 1];
    answer = answer.concat(Array.from({ length: freq }, (v) => val));
  }

  return answer;
};

const nums = [1, 2, 3, 4];
// const nums = [1, 1, 2, 3];

console.log(decompressRLElist(nums));
