// https://www.acmicpc.net/problem/2751
// 수 정렬하기 2

// [참고](https://travelerfootprint.tistory.com/82)

// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n").map((n) => parseInt(n));
const input = "5\n5\n4\n3\n2\n1\n".split("\n").map((n) => parseInt(n));

const N = input.shift();
input.pop();

// 분리된 배열 정렬 및 병합 함수
const merge = (a, low, mid, high) => {
  const b = []; // 왼쪽 시작
  let i = low; // 오른쪽 시작
  let j = mid + 1; // 배열 b의 인덱스 값
  let k = 0;

  while (i <= mid && j <= high) {
    // 분리된 왼쪽 배열과 오른쪽 배열 비교
    if (a[i] <= a[j]) b[k++] = a[i++];
    else b[k++] = a[j++];
  }
  while (i <= mid) b[k++] = a[i++]; // 비교하지 않은 왼쪽 배열이 있다면 배열 b에 전부 채우기
  while (j <= high) b[k++] = a[j++]; // 비교하지 않은 오른쪽 배열이 있다면 배열 b에 전부 채우기

  k--;
  // 배열 b 내용을 배열 a 내용에 덮어쓰기
  while (k >= 0) a[low + k] = b[k--];
};

// 배열의 요소를 분할하는 함수
const mergeSort = (a, low, high) => {
  let mid;
  if (low < high) {
    mid = Math.floor((low + high) / 2);
    mergeSort(a, low, mid); // 왼쪽 배열의 요소 분리
    mergeSort(a, mid + 1, high); // 오른쪽 배열의 요소 분리
    merge(a, low, mid, high); // 분리된 배열 정렬 및 병합 함수
  }
};

mergeSort(input, 0, N - 1);

let result = "";
input.map((n) => (result += `${n}\n`));
console.log(result);
