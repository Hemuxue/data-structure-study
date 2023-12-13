/*
 * @lc app=leetcode.cn id=11 lang=typescript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
function maxArea(height: number[]): number {
  let j = height.length - 1;
  let result = 0;
  for (let i = 0; i < height.length; i++) {
    if (i >= j) {
      break;
    }
    result = Math.max(Math.min(height[i], height[j]) * (j - i), result);
    while (height[i] > height[j] && i < j) {
      j--;
      result = Math.max(Math.min(height[i], height[j]) * (j - i), result);
    }
  }

  return result;
}
const testArr = [2, 3, 4, 5, 18, 17, 6];

maxArea(testArr);
// @lc code=end
