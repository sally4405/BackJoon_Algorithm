// https://programmers.co.kr/learn/courses/30/lessons/62048
// [참고](https://leedakyeong.tistory.com/entry/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EB%A9%80%EC%A9%A1%ED%95%9C-%EC%82%AC%EA%B0%81%ED%98%95-in-python)

function solution(w, h) {
  const GCD = gcd(Math.min(w, h), Math.max(w, h));
  return w * h - (w + h - GCD);
}

const gcd = (min, max) => {
  return min % max === 0 ? max : gcd(max, min % max);
};

console.log(solution(8, 12));
