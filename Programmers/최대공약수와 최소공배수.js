// https://programmers.co.kr/learn/courses/30/lessons/12940
// [참고](https://velog.io/@wooder2050/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EC%B5%9C%EB%8C%80%EA%B3%B5%EC%95%BD%EC%88%98%EC%99%80-%EC%B5%9C%EC%86%8C%EA%B3%B5%EB%B0%B0%EC%88%98-JavaScript)

function solution(n, m) {
  const gcd = (a, b) => {
    if (!b) return a;
    return gcd(b, a % b);
  };

  const lcm = (a, b) => {
    return (a * b) / gcd(a, b);
  };

  return [gcd(n, m), lcm(n, m)];
}

const n = 2;
const m = 5;

// const n = 3;
// const m = 12;

console.log(solution(n, m));
