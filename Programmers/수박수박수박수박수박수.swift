// https://programmers.co.kr/learn/courses/30/lessons/12922?language=swift
// 수박수박수박수박수박수?

import Foundation

func solution(_ n:Int) -> String {
    var answer: String = String(repeating: "수박", count: Int(floor(Double(n) / 2)))
    if n % 2 == 1 { answer += "수" }
    return answer
}

let n: Int = 3	
// "수박수"

// let n: Int = 4	
// // "수박수박

print(solution(n))
