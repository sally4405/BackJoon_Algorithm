// https://leetcode.com/problems/sum-of-all-odd-length-subarrays/
// Sum of All Odd Length Subarrays

var sumOddLengthSubarrays = function (arr) {
  let len = 1;
  let answer = 0;

  while (len <= arr.length) {
    let idx = 0;
    while (true) {
      if (idx + len > arr.length) break;
      for (let i = idx; i < idx + len; i++) {
        answer += arr[i];
      }
      idx++;
    }
    len += 2;
  }

  return answer;
};

// const arr = [1, 4, 2, 5, 3];
// // 58

// const arr = [1, 2];
// // 3

const arr = [10, 11, 12];
// 66

console.log(sumOddLengthSubarrays(arr));
