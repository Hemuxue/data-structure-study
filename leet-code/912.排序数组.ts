/*
 * @lc app=leetcode.cn id=912 lang=typescript
 *
 * [912] 排序数组
 */

// @lc code=start
function sortArray(nums: number[]): number[] {
  return nums.sort((prev, next) => (prev - next > 0 ? -1 : 1));
}
// @lc code=end
