function solution(n, m) {
  let gcd = 0;
  let num = [n, m];

  for (let i = 1; i <= Math.min.apply(null, num); i++) {
    if (Math.min.apply(null, num) % i == 0 && Math.max.apply(null, num) % i == 0) {
      gcd = i;
    }
  }

  return [num[0], num[1]];
}

const n = 3;
const m = 12;

console.log(solution(n, m));
