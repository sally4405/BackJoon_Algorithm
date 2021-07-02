// https://programmers.co.kr/learn/courses/30/lessons/17682?language=swift
// 다트 게임

import Foundation

func solution(_ dartResult:String) -> Int {
    let powDic: Dictionary<Character, Double> = ["S": 1.0, "D": 2.0, "T": 3.0]
    var scores: [Int] = []
    var startIdx = dartResult.startIndex
    
    for i in 0..<dartResult.count {
        let targetIdx = dartResult.index(dartResult.startIndex, offsetBy: i)
        let target: Character = dartResult[targetIdx]
        if target == "S" || target == "D" || target == "T" {
            var score: Int = Int(String(dartResult[startIdx..<targetIdx])) ?? 0
            score = Int(pow(Double(score), powDic[target]!))
            scores.append(score)
            
            if i == dartResult.count - 1 { break } 
            
            startIdx = dartResult.index(after: targetIdx)
            let next: Character = dartResult[startIdx]
            if next != "*" && next != "#" { continue }
            startIdx = dartResult.index(after: startIdx)
            
            if next == "#" { scores[scores.index(before: scores.endIndex)] *= -1 }
            else {
                scores[scores.index(before: scores.endIndex)] *= 2
                if scores.count > 1 {
                    scores[scores.index(scores.endIndex, offsetBy: -2)] *= 2
                }
            }
        }
    }
    
    return scores.reduce(0, { acc, cur in acc + cur})
}