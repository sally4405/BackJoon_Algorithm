// https://programmers.co.kr/learn/courses/30/lessons/68645
// 삼각 달팽이

function solution(n) {
  const arr = Array.from({ length: n }, (v) => []);
  const reverseArr = Array.from({ length: n }, (v) => []);

  let set = 0;
  let cnt = n;
  let num = 1;

  while (cnt >= 1) {
    for (let i = set * 2; i < set * 2 + cnt; i++) {
      arr[i].push(num);
      num++;
    }
    cnt--;
    if (!cnt) break;

    for (let i = num; i < num + cnt; i++) {
      arr[n - 1 - set].push(i);
    }
    num += cnt;
    cnt--;
    if (!cnt) break;

    set++;
    for (let i = n - 1 - set; i > n - 1 - set - cnt; i--) {
      reverseArr[i].push(num);
      num++;
    }
    cnt--;
  }

  return arr.map((ar, i) => ar.concat(reverseArr[i].reverse())).reduce((acc, cur) => acc.concat(cur), []);
}

// const n = 4;
// // [1,2,9,3,10,8,4,5,6,7]

// const n = 5;
// // [1, 2, 12, 3, 13, 11, 4, 14, 15, 10, 5, 6, 7, 8, 9]

const n = 6;
// [1, 2, 15, 3, 16, 14, 4, 17, 21, 13, 5, 18, 19, 20, 12, 6, 7, 8, 9, 10, 11];

console.log(solution(n));
