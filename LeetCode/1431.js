// https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/
// Kids With the Greatest Number of Candies

var kidsWithCandies = function (candies, extraCandies) {
  const max = Math.max(...candies);
  return candies.map((n) => n + extraCandies >= max);
};

const candies = [2, 3, 5, 1, 3];
const extraCandies = 3;

// const candies = [4,2,1,1,2]
// const extraCandies = 1

// const candies = [12,1,12]
// const extraCandies = 10

console.log(kidsWithCandies(candies, extraCandies));
