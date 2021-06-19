// https://leetcode.com/problems/sum-of-all-odd-length-subarrays/
// Sum of All Odd Length Subarrays

var sumOddLengthSubarrays = function (arr) {
  let nums = [];
  const halfLen = Math.ceil(arr.length / 2);
  let target = 0;
  let numsR;

  if (arr.length % 2) {
    for (let i = 0; i < halfLen; i++) {
      target += halfLen - Math.ceil(i / 2) * 2;
      nums.push(target);
    }
    numsR = nums.slice(0, -1).reverse();
  } else {
    for (let i = 0; i < halfLen; i++) {
      target += halfLen - i;
      nums.push(target);
    }
    numsR = nums.concat().reverse();
  }

  nums = nums.concat(numsR);
  return arr.reduce((acc, cur, i) => acc + cur * nums[i], 0);
};

const arr = [1, 4, 2, 5, 3];
// 58

// const arr = [1, 2];
// // 3

// const arr = [10, 11, 12];
// // 66

// const arr = [1, 2, 3, 4, 5, 6, 7, 8];
// const arr = [1, 2, 3, 4, 5];

console.log(sumOddLengthSubarrays(arr));
