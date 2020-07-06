# Reverse Integer

[LeetCode](https://leetcode.com/problems/reverse-integer/)

<details><summary>문제 설명</summary>

## 문제 설명
Given a 32-bit signed integer, reverse digits of an integer.

## 입출력 예
 | Inout | Output |
 | :---: | :----: |
 |  123  |  321   |
 | -123  |  -321  |
 |  120  |   21   |

## Note 
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−2<sup>31</sup>, 2<sup>31</sup> − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
</details>

## 해결 전략

[**전략1**](https://github.com/sally4405/CodeSquad_Algorithm/blob/master/200108%20Reverse%20Integer/reversestrversion.js)  
`Integer`를 `String`으로 바꿔서 reverse 시킨 후 다시 `Integer`로 바꿔주는 방식
``` javascript
for(let i = startNum; i < String(inputNum).length; i++) {
        result.push(String(inputNum).charAt(i));
    }
```
음수의 경우는 startNum을 1로 주고 양수는 0으로 주어 마이너스 부호를 빼고 push 해줌  


[**전략2**](https://github.com/sally4405/CodeSquad_Algorithm/blob/master/200108%20Reverse%20Integer/reverse.js)  
`Integer`를 type을 유지시키면서 reverse 해주는 방식
``` javascript
while(inputNum != 0) {
        answer = (answer * 10) + (inputNum % 10)
        inputNum = parseInt(inputNum / 10);
    }
```
<details><summary>시간 테스트</summary>
전략1과 전략2의 속도 중 무엇이 더 빠른지 테스트

``` javascript
console.time("reverse string version Time")
reverseStrVersion(1534236);
console.timeEnd('reverse string version Time');

console.time("reverse int version Time")
reverseIntVersion(1534236);
console.timeEnd('reverse int version Time');
```

평균적으로 전략2가 20배 정도 빨랐음  
<sub> * 처음에 전략2에서 `Integer`를 reverse 해줄 때 log를 이용해서 숫자의 길이를 구한 후 큰 숫자부터 reverse 해줬는데 숫자의 길이를 신경쓰지 않고 원래 숫자의 값을 줄여가며 reverse 하는 것으로 수정 > 속도가 2배 가량 빨라짐  <sub>
</details>
