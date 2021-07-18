//https://programmers.co.kr/learn/courses/30/lessons/12934?language=swift
//정수 제곱근 판별

import Foundation

func solution(_ n:Int64) -> Int64 {
    let sq: Double = Double(n).squareRoot()
    let answer: Int64 = sq == floor(sq) ? (Int64(sq) + 1) * (Int64(sq) + 1) : -1
    return answer
}

//let n: Int64 = 121
////144

let n: Int64 = 3
//-1

print(solution(n))
