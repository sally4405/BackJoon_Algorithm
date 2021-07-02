//https://programmers.co.kr/learn/courses/30/lessons/12937?language=swift
//짝수와 홀수

import Foundation

func solution(_ num:Int) -> String {
    return num % 2 == 0 ? "Even" : "Odd"
}

let numA: Int = 3
//"Odd"

let numB: Int = 4
//"Even"

print(solution(numA))
print(solution(numB))
