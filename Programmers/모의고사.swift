// https://programmers.co.kr/learn/courses/30/lessons/42840?language=swift
// 모의고사

import Foundation

func solution(_ answers:[Int]) -> [Int] {
    var scores: [Int] = [0, 0, 0]
    for (index, answer) in answers.enumerated() {
        // 1번
        if answer == (index % 5) + 1 {
            scores[0] += 1
        }
        
        // 2번
        if index % 2 == 0 {
            if answer == 2 {
                scores[1] += 1
            }
        } else {
            switch ((index + 1) / 2) % 4 {
                case 1:
                    if answer == 1 {
                        scores[1] += 1
                    }
                case 2:
                    if answer == 3 {
                        scores[1] += 1
                    }
                case 3:
                    if answer == 4 {
                        scores[1] += 1
                    }
                case 0:
                    if answer == 5 {
                        scores[1] += 1
                    }
                default:
                    break
            }
        }
        
        // 3번
        switch Int(floor(Double(index) / 2)) % 5 {
            case 0:
                if answer == 3 {
                    scores[2] += 1
                }
            case 1:
                if answer == 1 {
                    scores[2] += 1
                }
            case 2:
                if answer == 2 {
                    scores[2] += 1
                }
            case 3:
                if answer == 4 {
                    scores[2] += 1
                }
            case 4:
                if answer == 5 {
                    scores[2] += 1
                }
            default:
                break
        }
    }
    
    let max: Int = scores.max() ?? 0
    
    if max == 0 {
        return []
    }
    
    var answer: [Int] = []
    
    for (index, score) in scores.enumerated() {
        if score == max {
            answer.append(index + 1)
        }
    }
    
    return answer
}