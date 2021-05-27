// https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/
// Subtract the Product and Sum of Digits of an Integer

var subtractProductAndSum = function (n) {
  const splittedN = n
    .toString()
    .split("")
    .map((n) => parseInt(n));

  return splittedN.reduce((acc, cur) => acc * cur, 1) - splittedN.reduce((acc, cur) => acc + cur, 0);
};

// const n = 234;
const n = 4421;

console.log(subtractProductAndSum(n));
