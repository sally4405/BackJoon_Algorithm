//https://programmers.co.kr/learn/courses/30/lessons/42889?language=swift
//실패율

import Foundation

func solution(_ N:Int, _ stages:[Int]) -> [Int] {
    var answer: [Int] = []
    var failRate: [Dictionary<String, Int>] = []
    
    for i in 0..<N+1 {
        failRate.append(["stageNum": i + 1, "clearedStage": 0, "arrivedStage": 0])
    }
      
    for stage in stages {
        for i in 0..<stage {
            failRate[i]["arrivedStage"] = Int(failRate[i]["arrivedStage"]!) + 1
            if i != stage - 1 { failRate[i]["clearedStage"] = Int(failRate[i]["clearedStage"]!) + 1 }
        }
    }
    
    failRate.removeLast()
    failRate = failRate.sorted(by: { Double($0["clearedStage"]!) / Double($0["arrivedStage"]!) < Double($1["clearedStage"]!) / Double($1["arrivedStage"]!) })
    
    for stage in failRate {
        answer.append(Int(stage["stageNum"]!))
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
