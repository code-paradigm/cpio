---
title: "Merge Sorted Array"
description: "You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively."
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
Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

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
  def merge(self, nums1: list[int], m: int, nums2: list[int], n: int) -> None:
    """ Do not return anything, modify nums1 in-place instead. """
    
    for count in range(m, n+m):
      nums1[count] = nums2[count-m]

    nums1.sort()
        

if __name__ == '__main__':
  nums1: list[int] = [1,2,3,0,0,0]
  m: int = 3
  nums2: list[int] = [2,5,6]
  n : int= 3
  
  s = Solution()
  s.merge(nums1, m, nums2, n)
  print(nums1)

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