// https://programmers.co.kr/learn/courses/30/lessons/12953
// [참고](https://velog.io/@tjdud0123/N%EA%B0%9C%EC%9D%98-%EC%B5%9C%EC%86%8C%EA%B3%B5%EB%B0%B0%EC%88%98)

function solution(arr) {
  const gcd = (a, b) => (b ? gcd(b, a % b) : a);
  return arr.reduce((acc, cur) => (acc * cur) / gcd(acc, cur));
}

const arr = [2, 6, 8, 14];
// 168

console.log(solution(arr));
