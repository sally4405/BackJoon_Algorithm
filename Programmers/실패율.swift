//https://programmers.co.kr/learn/courses/30/lessons/42889?language=swift
//실패율

import Foundation

func solution(_ N:Int, _ stages:[Int]) -> [Int] {
    var answer: [Int] = []
    var failRate: [[Int]] = []
    
    for i in 1..<N+2 {
        failRate.append([i, 0, 0])
    }

    for stage in stages {
        for i in 0..<stage {
            failRate[i][1] = failRate[i][1] + 1
            if i != stage - 1 { failRate[i][2] = failRate[i][2] + 1 }
        }
    }

    failRate.removeLast()
    failRate = failRate.sorted(by: { Double($0[2]) / Double($0[1]) < Double($1[2]) / Double($1[1]) })

    for stage in failRate {
        answer.append(stage[0])
    }
    
    return answer
}

   
let N: Int = 5
let stages: [Int] = [2, 1, 2, 6, 2, 4, 3, 3]
//[3,4,2,1,5]

//let N: Int = 4
//let stages: [Int] = [4,4,4,4,4]
////[4,1,2,3]

print(solution(N, stages))
