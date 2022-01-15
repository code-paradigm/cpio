class Solution:
  def sortedSquares(self, nums: list[int]) -> list[int]:
    nums = [n * n for n in nums]
    return sorted(nums)


if __name__ == '__main__':
  input: list[int] = [6, -2, -4, 3]

  s = Solution()
  print(s.sortedSquares(input))
