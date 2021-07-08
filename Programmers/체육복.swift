//https://programmers.co.kr/learn/courses/30/lessons/42862?language=swift
//체육복

import Foundation

func solution(_ n:Int, _ lost:[Int], _ reserve:[Int]) -> Int {
    var answer: Int = 0
    var realReserve: [Int] = reserve.filter { !lost.contains($0) }
    let realLost: [Int] = lost.filter { !reserve.contains($0) }
    
    for i in 1...n {
        if !realLost.contains(i) {
            answer += 1
            continue
        }
        
        if let smallSizeIndex = realReserve.firstIndex(of: i - 1) {
            answer += 1
            realReserve.remove(at: smallSizeIndex)
            continue
        }
        
        if let largeSizeIndex = realReserve.firstIndex(of: i + 1) {
            answer += 1
            realReserve.remove(at: largeSizeIndex)
            continue
        }
    }
    
    return answer
}

        
//let n: Int = 5
//let lost: [Int] = [2, 4]
//let reserve: [Int] = [1, 3, 5]
////5

let n: Int = 5
let lost: [Int] = [2, 4]
let reserve: [Int] = [3]
//4

//let n: Int = 3
//let lost: [Int] = [3]
//let reserve: [Int] = [1]
////2

print(solution(n, lost, reserve))
