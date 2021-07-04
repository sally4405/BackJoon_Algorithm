//https://programmers.co.kr/learn/courses/30/lessons/12943?language=swift
//콜라츠 추측

import Foundation

func solution(_ num:Int) -> Int {
    if num == 1 { return 0 }
    var answer: Int = 0
    var result: Int = num
    
    while answer < 500 {
        answer += 1
        if result % 2 == 0 { result /= 2 }
        else { result = (result * 3) + 1 }
        if result == 1 { break }
    }
    
    return result == 1 ? answer : -1
}

//let n: Int = 6
////8

//let n: Int = 16
////4

let n: Int = 626331
//-1

print(solution(n))
