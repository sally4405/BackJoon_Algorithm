//https://programmers.co.kr/learn/courses/30/lessons/12910?language=swift

import Foundation

func solution(_ arr:[Int], _ divisor:Int) -> [Int] {
    var answer: [Int] = []
    
    for num in arr {
        if isInteger(num: num, divisor: divisor) {
            answer.append(num)
        }
    }
    
    answer.sort()
    
    return answer.count > 0 ? answer : [-1]
}

func isInteger(num: Int, divisor: Int) -> Bool {
    let doubleNum: Double = Double(num) / Double(divisor)
    return doubleNum == floor(doubleNum)
}

let arrA: [Int] = [5, 9, 7, 10]
let divisorA: Int = 5
//[5, 10]

let arrB: [Int] = [2, 36, 1, 3]
let divisorB: Int = 1
//[1, 2, 3, 36]
    
let arrC: [Int] = [3,2,6]
let divisorC: Int = 10
//[-1]

print(solution(arrA, divisorA))
print(solution(arrB, divisorB))
print(solution(arrC, divisorC))
