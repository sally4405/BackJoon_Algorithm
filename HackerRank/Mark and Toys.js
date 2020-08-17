// https://www.hackerrank.com/challenges/mark-and-toys/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=sorting

function maximumToys(prices, k) {
  let answer = 0;
  let totalPrice = 0;
  prices.sort((a, b) => a - b);
  for (let i = 0; i < prices.length; i++) {
    if ((totalPrice += prices[i]) < k) {
      answer++;
    } else break;
  }
  return answer;
}

const prices = [1, 12, 5, 111, 200, 1000, 10];
const k = 50;

console.log(maximumToys(prices, k));
// 4
