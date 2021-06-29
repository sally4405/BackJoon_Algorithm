// https://leetcode.com/problems/find-the-highest-altitude/
// Find the Highest Altitude

var largestAltitude = function (gain) {
  let max = 0;
  gain.reduce((acc, cur) => {
    max = max > acc + cur ? max : acc + cur;
    return acc + cur;
  }, 0);
  return max;
};

// const gain = [-5, 1, 5, 0, -7];
// // Output: 1

const gain = [-4, -3, -2, -1, 4, 3, 2];
// Output: 0

console.log(largestAltitude(gain));
