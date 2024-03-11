/*
 * @lc app=leetcode.cn id=198 lang=typescript
 *
 * [198] 打家劫舍
 */

// @lc code=start
function rob(nums: number[]): number {
  if (nums == null || nums.length === 0) {
    return 0;
  }
  if (nums.length === 1) {
    return nums[0];
  }

  const len = nums.length;
  const arr = new Array(len);
  arr[0] = nums[0];
  arr[1] = Math.max(nums[0], nums[1]);
  for (let i = 2; i < len; i++) {
    arr[i] = Math.max(arr[i - 2] + nums[i], arr[i - 1]);
  }
  return arr[arr.length - 1];
}

const numss = [1, 2, 3, 1];
rob(numss);
// @lc code=end
