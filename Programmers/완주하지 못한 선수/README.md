# 완주하지 못한 선수

[프로그래머스](https://programmers.co.kr/learn/courses/30/lessons/42576)

<details><summary>문제 설명</summary>

## 문제 설명
수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.  
마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.  

## 제한사항
- 마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
- completion의 길이는 participant의 길이보다 1 작습니다.
- 참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
- 참가자 중에는 동명이인이 있을 수 있습니다.

## 입출력 예
participant | completion | return
------------|------------|--------
[leo, kiki, eden] | [eden, kiki] | leo
[marina, josipa, nikola, vinko, filipa] | [josipa, filipa, marina, nikola] | vinko
[mislav, stanko, mislav, ana] | [stanko, ana, mislav] | mislav

## 입출력 예 설명
**예제 #1**  
leo는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.  
**예제 #2**  
vinko는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.  
**예제 #3**  
mislav는 참여자 명단에는 두 명이 있지만, 완주자 명단에는 한 명밖에 없기 때문에 한명은 완주하지 못했습니다.  

</details>


## 해결 전략 
java script는 `object`가 `hashmap`처럼 key를 통해 value의 접근이 바로 가능하다.  
따라서 이미 있는 key인지 검사 후 있으면 value 값을 1 증가시키고 없으면 value를 1로 하여 새로 추가한다.  
``` javascript
var result = []
participant.forEach(element => {
        if(result[element]===undefined) result[element] = 1
        else result[element]++;
    })
```
같은 방법으로 completion 배열에 있는 key 값들을 순회하며 1씩 감소시킨다.  
마지막으로 value의 값이 1인 key가 answer가 된다.  


