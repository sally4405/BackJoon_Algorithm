// https://programmers.co.kr/learn/courses/30/lessons/12931?language=swift
// 자릿수 더하기

import Foundation

func solution(_ n:Int) -> Int {
    var answer: Int = 0
    var temp: Int = n
    
    while temp > 0 {
        answer += temp % 10
        temp = Int(floor(Double(temp) / 10))
    }
    
    return answer
}

let n: Int = 123	
// 6

// let n: Int = 987	
// // 24

print(solution(n))
