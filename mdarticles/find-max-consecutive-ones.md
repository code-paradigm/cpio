---
title: "Find Maximum Consecutive Ones in an Array"
description: "Given a binary array numbers, return the maximum number of consecutive 1's in the array."
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

The logic is to keep track of both the running total as well as the max total.

## Solution

<div class="select-language">
  <button class="language-button" onClick="showLanguage(0)">Python</button>
  <button class="language-button" onClick="showLanguage(1)">TypeScript</button>
</div>

<div class="solution-language">
<h3> {python} <span>main.py</span></h3>
<pre>
<code class="language-python">def maxOnes(array: list[int]) -> int:
  result: int = 0 #Final value this Function returns
  temp: int = 0 #Keeps track of running total

  for number in array:
    if number == 1:
      temp += 1
    else:
      if temp > result: result = temp
      temp = 0 #Reset the temporary variable

  #When the last element is in max consecutive One
  if temp > result: return temp
  return result


if __name__ == '__main__':
  input: list[int] = [1,1,0,1,1,1]
  print(maxOnes(input))

.</code>
</pre>
</div>

<div class="solution-language">
<h3> {javascript} <span>main.ts</span></h3>
<pre>
<code class="language-javascript">function findMaxConsecutiveOnes(nums: number[]): number {
  let result: number = 0; //Final value this Function returns
  let temp: number = 0; //Keeps track of running total

  for (let number of nums) {
    if (number === 1) temp += 1;
    else {
      if (temp > result) result = temp;
      temp = 0; //Reset the temporary variable
    }
  }

  //When the last element is in max consecutive One
  if (temp > result) return temp;
  return result;
}

.</code>
</pre>
</div>

<div id="article-footer"></div>