//https://programmers.co.kr/learn/courses/30/lessons/42889?language=swift
//실패율

import Foundation

class FailRate {
    var stageNum: Int
    var clearedStage: Double
    var arrivedStage: Double
    
    init(stageNum: Int) {
        self.stageNum = stageNum
        self.clearedStage = 0
        self.arrivedStage = 0
    }
}

func solution(_ N:Int, _ stages:[Int]) -> [Int] {
    var answer: [Int] = []
    var failRates: [FailRate] = []
    
    for i in 1..<N+2 {
        failRates.append(FailRate(stageNum: i))
    }

    for stage in stages {
        for i in 0..<stage {
            failRates[i].arrivedStage = failRates[i].arrivedStage + 1
            if i != stage - 1 { failRates[i].clearedStage = failRates[i].clearedStage + 1 }
        }
    }

    failRates.removeLast()
    failRates = failRates.sorted(by: { $0.clearedStage / $0.arrivedStage < $1.clearedStage / $1.arrivedStage })

    for stage in failRates {
        answer.append(stage.stageNum)
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
