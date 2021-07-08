//https://programmers.co.kr/learn/courses/30/lessons/77884?language=swift
//약수의 개수와 덧셈

import Foundation

func solution(_ left:Int, _ right:Int) -> Int {
    var answer: Int = 0
    
    for i in left...right {
        let sqrt: Int = Int(floor(Double(i).squareRoot()))
        answer =  sqrt*sqrt == i ? answer - i : answer + i
    }
    
    return answer
}
    
let left: Int = 13
let right: Int = 17
//43

//let left: Int = 24
//let right: Int = 27
////52

print(solution(left, right))
