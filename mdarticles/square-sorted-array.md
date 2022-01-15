---
title: "Squares of a Sorted Array"
description: "Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order."
authorImage: "../assets/ajesh.jpg"
author: "Ajesh Mishra"
date: "15 Jan 2022"
duration: "5 min read"
published: true
photo: "https://i.imgur.com/9hn4RUz.png"
tags:
  - codechallenge
  - array
  - beginner
---

<div id="article-header"></div>

## Algorithm

The logic is to square the values and then sort.

## Python

### {python} main.py
```python
def maxOnes(array: list[int]) -> int:
  class Solution:
  def sortedSquares(self, nums: list[int]) -> list[int]:
    nums = [n * n for n in nums]
    return sorted(nums)


if __name__ == '__main__':
  input: list[int] = [6, -2, -4, 3]

  s = Solution()
  print(s.sortedSquares(input))
```

## TypeScript

### {typescript} main.ts
```javascript
function sortedSquares(nums: number[]): number[] {
    let result: number[] = [];
    
    for (let n of nums) {
        result.push(n * n);
    }
    
    return result.sort((a, b) => {return a - b});
}
```

<div id="article-footer"></div>