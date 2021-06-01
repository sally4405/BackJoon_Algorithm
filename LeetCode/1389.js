// https://leetcode.com/problems/create-target-array-in-the-given-order/
// Create Target Array in the Given Order

var createTargetArray = function (nums, index) {
  let target = [];

  for (let i = 0; i < index.length; i++) {
    target = insert(target, nums[i], index[i]);
  }

  return target;
};

const insert = (arr, n, i) => {
  if (arr.length === i) {
    arr.push(n);
    return arr;
  }

  return [...arr.slice(0, i), n].concat(arr.slice(i));
};

const nums = [0, 1, 2, 3, 4];
const index = [0, 1, 2, 2, 1];

// const nums = [1, 2, 3, 4, 0];
// const index = [0, 1, 2, 3, 0];

// const nums = [1];
// const index = [0];

console.log(createTargetArray(nums, index));
