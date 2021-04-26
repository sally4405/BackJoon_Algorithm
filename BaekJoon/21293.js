// https://www.acmicpc.net/problem/21293
// No Description 2

// 틀렸습니다: 다섯 개의 조각을 모아 문제를 완성하자!
// 메모리 초과: 첫 번째 줄에 정수 z,y,x,w,v,u,t,s,r,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a가 주어진다.
// 출력 초과: 1 ≤ a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,r,s,t,u,v,w,x,y,z ≤ 10
// 런타임 에러: 첫 번째 줄에 a-b를 출력한다.
// 컴파일 에러: 두 번째 줄에 a*b를 출력한다.
// 시간 초과: 세 번째 줄에 a+b+1을 출력한다.

// const input = require("fs").readFileSync("/dev/stdin").toString().split(" ");
const input = "1 2 3 4 5 6 7 8 9 10 1 2 3 4 5 6 7 8 9 10 1 2 3 4 10 9\n".split(" ");

const a = parseInt(input.pop());
const b = parseInt(input.pop());

console.log(a - b);
console.log(a * b);
console.log(a + b + 1);

///////////////////////////////////////////////////////////////////////////////////////////

// 오류 내기 위한 코드

// 틀렸습니다
// console.log()

// 메모리 초과
// const a = Array.from({ lenth: 1000000000000000000000000000 }, (v, i) => i);
// const b = [];
// while (true) {
//   b.push(a);
// }

// 출력 초과
// while (true) {
//   console.log();
// }

// 런타임 에러 (ReferenceError)
// console.log(a)

// 컴파일 에러 (node js로 안되서 파이썬 사용)
// print('\    /\\n )  ( ')\n(  /  )\n \(__)|')

// 시간 초과
// let a = 0;
// while (true) {
//   a++;
// }
