# 멀쩡한 사각형

[프로그래머스](https://programmers.co.kr/learn/courses/30/lessons/62048)

<details><summary>문제 설명</summary>

## 문제 설명
- 가로 길이가 Wcm, 세로 길이가 Hcm인 직사각형 종이가 있습니다. 
- 종이에는 가로, 세로 방향과 평행하게 격자 형태로 선이 그어져 있으며, 모든 격자칸은 1cm x 1cm 크기입니다. 
- 이 종이를 격자 선을 따라 1cm × 1cm의 정사각형으로 잘라 사용할 예정이었는데, 누군가가 이 종이를 대각선 꼭지점 2개를 잇는 방향으로 잘라 놓았습니다. 
- 그러므로 현재 직사각형 종이는 크기가 같은 직각삼각형 2개로 나누어진 상태입니다. 
- 새로운 종이를 구할 수 없는 상태이기 때문에, 이 종이에서 원래 종이의 가로, 세로 방향과 평행하게 1cm × 1cm로 잘라 사용할 수 있는 만큼만 사용하기로 하였습니다.
- 가로의 길이 W와 세로의 길이 H가 주어질 때, 사용할 수 있는 정사각형의 개수를 구하는 solution 함수를 완성해 주세요.

## 제한사항
- W, H : 1억 이하의 자연수

## 입출력 예
W | H | result
--|---|-------
8 | 12 | 80

</details>


## 해결 전략 
- `sort()`의 `compareFunction`을 이용
    - `int` 값을 `string`으로 바꾼 후 index로 제일 앞 자리부터 비교
        - 숫자가 다른 경우
            ```javascript
            if(aStr[i] < bStr[i]) return 1;
            if(aStr[i] > bStr[i]) return -1;
            ```
        - 숫자가 같은 경우 
            - 다음 자리가 둘 다 **있는** 경우 : `loop`
            - 다음 자리가 둘 다 **없는** 경우 :  `return 0;`
            - 다음 자리가 **하나만** 없는 경우 
                ```javascript
                if(aStr[i] === undefined) {
                    for(let j =0; j < bStr.length-i; j++) {
                        if(bStr[i+j] > bStr[j]) return 1;
                        if(bStr[i+j] < bStr[j]) return -1;
                    }
                }
                ```

- `join("")`로 합쳐서 return

## 해결하지 못한 부분
- 몇 가지 테스트 케이스 통과 못함
- `compareFunction`을 따로 함수로 빼고 싶음
