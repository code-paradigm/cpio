---
title: "Remove Element"
description: "Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The relative order of the elements may be changed."
authorImage: "../assets/ajesh.jpg"
author: "Ajesh Mishra"
date: "16 Jan 2022"
duration: "5 min read"
published: true
photo: "https://i.imgur.com/9hn4RUz.png"
tags:
  - codechallenge
  - array
  - beginner
---

<div id="article-header"></div>

## Constraints

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

Return k after placing the final result in the first k slots of nums.

Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

## Algorithm

The easy way is to convert the integer to string and then find the length.

## Solution

<div class="select-language">
  <button class="language-button" onClick="showLanguage(0)">Python</button>
  <button class="language-button" onClick="showLanguage(1)">TypeScript</button>
</div>

<div class="solution-language">
<h3> {python} <span>main.py</span></h3>
<pre>
<code class="language-python">class Solution:
  def removeElement(self, nums: list[int], val: int) -> int:
    positions: list[int] = []
    for count, num in enumerate(nums):
      if num == val: positions.append(count)

    positions.reverse()
    for pos in positions:
      nums.pop(pos)

    return len(nums)
        
if __name__ == '__main__':
  input: list[int] = [0,1,2,2,3,0,4,2]
  val: int = 2
  
  s = Solution()
  print(s.removeElement(input, val))
  print(input)

.</code>
</pre>
</div>

<div class="solution-language">
<h3> {javascript} <span>main.ts</span></h3>
<pre>
<code class="language-javascript">// Do not return anything, modify nums1 in-place instead.
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  for (let count = m; count < n+m; count++) {
    nums1[count] = nums2[count-m];
  }
  
  // Sort needs a function to sort integers
  nums1.sort((a, b) => {return a - b});
}

.</code>
</pre>
</div>

<div id="article-footer"></div>