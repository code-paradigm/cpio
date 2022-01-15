---
title: "Duplicate Zeros"
description: "Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right."
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

The easy way is to convert the integer to string and then find the length.

## Python

### {python} main.py
```python
class Solution:
  def duplicateZeros(arr: list[int]) -> None:
    """ Do not return anything, modify arr in-place instead. """

    arr_length: int = len(arr)
    skip: bool = False

    for count, number in enumerate(arr):
      if skip or (count + 1) == arr_length: 
        skip = False
        continue

      if number == 0:
        arr.pop()
        arr.insert(count+1, 0)
        skip = True
        

if __name__ == '__main__':
  input: list[int] = [1,0,2,3,0,4,5,0]
  Solution.duplicateZeros(input)
  print(input)
```

## TypeScript

### {typescript} main.ts
```javascript
function duplicateZeros(arr: number[]): void {
// Do not return anything, modify arr in-place instead.
  let arrLength: number = arr.length;
  let skip: boolean = false;
  var count: number = -1;

  for (let num of arr) {
    count += 1;
      
    if (skip || (count + 1) === arrLength) {
      skip = false;
      continue;
    }

    if (num === 0) {
      arr.pop();
      arr.splice(count+1, 0, 0);
      skip = true;
    }
  }
}
```
<div id="article-footer"></div>