/*
 * @lc app=leetcode.cn id=15 lang=typescript
 *
 * [15] 三数之和
 */

// @lc code=start
function threeSum(nums: number[]): number[][] {
  const targetArr: string[] = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          const temp = [nums[i], nums[j], nums[k]].sort((prev, next) => next - prev);
          targetArr.push(temp.join(","));
        }
      }
    }
  }
  if (targetArr.length === 0) {
    return [];
  }
  const obj = {};
  targetArr.forEach((ele) => {
    if (!obj[ele]) {
      obj[ele] = ele;
    }
  });
  const result = [];
  Object.keys(obj).forEach((ele) => {
    result.push(ele.split(","));
  });
  return result;
}
// @lc code=end
