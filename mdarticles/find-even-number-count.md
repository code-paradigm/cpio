---
title: "Find Numbers with Even Number of Digits"
description: "Given an array nums of integers, return how many of them contain an even number of digits."
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

## Solution

<div class="select-language">
  <button class="language-button" onClick="showLanguage(0)">Python</button>
  <button class="language-button" onClick="showLanguage(1)">TypeScript</button>
</div>

<div class="solution-language">
<h3> {python} <span>main.py</span></h3>
<pre>
<code class="language-python">class Solution:
  def findNumbers(self, nums: list[int]) -> int:
    result: int = 0

    for num in nums:
      num_digits: int = len(str(num))
      if num_digits % 2 == 0:
        result += 1

    return result


if __name__ == '__main__':
  input: list[int] = [12, 2290, 2437, 3]

  s = Solution()
  print(s.findNumbers(input))

.</code>
</pre>
</div>

<div class="solution-language">
<h3> {javascript} <span>main.ts</span></h3>
<pre>
<code class="language-javascript">function findNumbers(nums: number[]): number {
  let result: number = 0;

  for (let num of nums) {
    let num_digits: number = num.toString().length;
    if (num_digits % 2 == 0) result += 1;
  }

  return result;
}

.</code>
</pre>
</div>

<div id="article-footer"></div>