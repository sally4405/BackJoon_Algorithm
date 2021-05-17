// https://leetcode.com/problems/richest-customer-wealth/
// Richest Customer Wealth

var maximumWealth = function (accounts) {
  let max = 0;
  accounts.map((account) => {
    const money = account.reduce((acc, cur) => acc + cur, 0);
    max = max > money ? max : money;
  });
  return max;
};

const accounts = [
  [1, 2, 3],
  [3, 2, 1],
];
// const accounts = [[1,5],[7,3],[3,5]]
// const accounts = [[2,8,7],[7,1,3],[1,9,5]]

console.log(maximumWealth(accounts));
