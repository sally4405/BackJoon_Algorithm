//https://programmers.co.kr/learn/courses/30/lessons/12977?language=swift
//소수 만들기

import Foundation

func solution(_ nums:[Int]) -> Int {
    var answer = 0
    
    for i in 0..<nums.count-2 {
        for j in i+1..<nums.count-1 {
            for k in j+1..<nums.count {
                if isPrimeNumber(num: nums[i] + nums[j] + nums[k]) { answer += 1 }
            }
        }
    }
    
    return answer
}

func isPrimeNumber(num: Int) -> Bool {
    for i in 2..<num {
        if num % i == 0 { return false }
    }
    return true
}


//let nums: [Int] = [1,2,3,4]
////1

let nums: [Int] = [1,2,7,6,4]
//4

print(solution(nums))
