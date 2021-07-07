// https://programmers.co.kr/learn/courses/30/lessons/12912?language=swift
// 두 정수 사이의 합

func solution(_ a:Int, _ b:Int) -> Int64 {
    let sum: Int64 = Int64(a + b)
    let diff: Int64 = Int64(a - b)
    return (sum * (abs(diff) + 1)) / 2
}

let a: Int = 3	
let b: Int = 5	
// 12

// let a: Int = 3	
// let b: Int = 3	
// // 3

// let a: Int = 5	
// let b: Int = 3	
// // 12

print(solution(a, b))