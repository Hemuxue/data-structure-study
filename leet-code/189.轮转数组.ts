/*
 * @lc app=leetcode.cn id=189 lang=typescript
 *
 * [189] 轮转数组
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  const len = nums.length;
  const temp = [...nums];
  const step = k > nums.length ? k % len : k;
  const getIndex = (i: number) => {
    return i < 0 ? len + i : i;
  };

  for (let i = len - 1; i >= 0; i--) {
    nums[i] = temp[getIndex(i - step)];
  }
}

const nums111 = [1, 2, 3, 4, 5, 6, 7];
rotate(nums111, 3);
// @lc code=end
